# ============================================
# Graylog & Elasticsearch 性能优化命令列表
# ============================================

# ----------------------------
# 1. Elasticsearch 集群健康检查
# ----------------------------

# 检查集群健康状态
curl -X GET "http://localhost:9200/_cluster/health?pretty"

# 查看节点负载和资源使用
curl -X GET "http://localhost:9200/_cat/nodes?v&h=name,cpu,heap.percent,ram.percent,disk.used_percent"

# 查看索引状态
curl -X GET "http://localhost:9200/_cat/indices/graylog_*?v&h=index,docs.count,store.size,pri.store.size"


# ----------------------------
# 2. Elasticsearch 配置优化
# ----------------------------

# 动态调整索引刷新间隔（临时生效）
curl -X PUT "http://localhost:9200/graylog_*/_settings" -H 'Content-Type: application/json' -d'
{
  "index": {
    "refresh_interval": "30s"
  }
}'

# 修改索引模板（永久生效）
curl -X PUT "http://localhost:9200/_index_template/graylog-template" -H 'Content-Type: application/json' -d'
{
  "index_patterns": ["graylog_*"],
  "template": {
    "settings": {
      "index.refresh_interval": "30s",
      "index.translog.durability": "async",
      "index.translog.sync_interval": "60s",
      "index.number_of_replicas": 1
    }
  }
}'


# ----------------------------
# 3. Graylog 配置文件修改
# ----------------------------

# 编辑 Graylog 配置文件
sudo vi /etc/graylog/server/server.conf

# 修改以下参数：
# --------------------------
# message_journal_max_size = 50gb
# processbuffer_processors = 8
# outputbuffer_processors = 3
# output_batch_size = 5000
# output_flush_interval = 1
# --------------------------

# 重启 Graylog 服务
sudo systemctl restart graylog-server


# ----------------------------
# 4. 索引生命周期管理 (ILM)
# ----------------------------

# 创建 ILM 策略（保留 7 天）
curl -X PUT "http://localhost:9200/_ilm/policy/graylog_policy" -H 'Content-Type: application/json' -d'
{
  "policy": {
    "phases": {
      "hot": {
        "actions": {
          "rollover": {
            "max_size": "50gb",
            "max_age": "1d"
          }
        }
      },
      "delete": {
        "min_age": "7d",
        "actions": {
          "delete": {}
        }
      }
    }
  }
}'


# ----------------------------
# 5. 系统资源监控
# ----------------------------

# 实时监控 Journal 使用率
watch -n 5 "du -sh /var/lib/graylog-server/journal/"

# 检查 Graylog 服务状态
sudo journalctl -u graylog-server -f

# 监控磁盘 I/O 性能
sudo iostat -x 5


# ----------------------------
# 6. 定期维护命令
# ----------------------------

# 手动强制轮转索引
curl -X POST "http://localhost:9200/graylog_*/_rollover"

# 清理旧索引（保留最近7天）
curl -X DELETE "http://localhost:9200/graylog_$(date -d '7 days ago' +%Y-%m-%d)"
======================================================================================================
使用说明：

将以上内容保存为 optimization_commands.txt

按顺序执行各部分命令

Elasticsearch 相关命令需在 ES 节点执行

Graylog 配置修改后需要重启服务

监控命令可长期运行观察效果
