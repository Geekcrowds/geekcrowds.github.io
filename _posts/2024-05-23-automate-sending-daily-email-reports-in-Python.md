To automate sending daily email reports in Python, you can use the smtplib and email libraries for sending emails, and the schedule library to run your script daily. Here’s a step-by-step guide to setting this up:

Step 1: Install Necessary Libraries
First, ensure you have the necessary libraries installed. You can install them using pip:

pip install schedule

Step 2: Create the Python Script
Create a Python script (e.g., daily_email_report.py) and add the following code to it.

2.1 Import Libraries

import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import schedule
import time

2.2 Define Email Sending Function

def send_email_report():
    # Email configuration
    smtp_server = 'smtp.example.com'  # Replace with your SMTP server
    smtp_port = 587  # Replace with your SMTP port (587 is for TLS)
    sender_email = 'your_email@example.com'
    receiver_email = 'receiver_email@example.com'
    sender_password = 'your_password'

    # Email content
    subject = 'Daily Report'
    body = 'This is your daily report.'

    # Create the email
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = receiver_email
    msg['Subject'] = subject

    msg.attach(MIMEText(body, 'plain'))

    try:
        # Connect to the server
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()  # Secure the connection
        server.login(sender_email, sender_password)

        # Send the email
        server.sendmail(sender_email, receiver_email, msg.as_string())

        print("Email sent successfully")

    except Exception as e:
        print(f"Error: {e}")

    finally:
        # Disconnect from the server
        server.quit()
        
2.3 Schedule the Email

def schedule_daily_email():
    # Schedule the task daily at a specific time
    schedule.every().day.at("09:00").do(send_email_report)  # Adjust the time as needed

    while True:
        schedule.run_pending()
        time.sleep(1)

if __name__ == "__main__":
    schedule_daily_email()
    
Step 3: Run the Script
Run your script using Python. This script will send an email every day at the scheduled time (09:00 in this example).

python daily_email_report.py

Step 4: Setup SMTP Server Details
Make sure you replace the SMTP server details and login credentials with your own. If you are using Gmail, for instance, the SMTP server would be smtp.gmail.com and the port 587.

Step 5: Secure Your Credentials
It’s not secure to store your email password in plaintext in the script. Consider using environment variables or a secure vault to store your credentials.

Using Environment Variables
Set environment variables in your OS:

On Windows:

set EMAIL_USER=your_email@example.com
set EMAIL_PASS=your_password

On macOS/Linux:

export EMAIL_USER=your_email@example.com
export EMAIL_PASS=your_password

Modify the script to use these variables:

import os
sender_email = os.getenv('EMAIL_USER')
sender_password = os.getenv('EMAIL_PASS')

Step 6: Ensure Continuous Running
For continuous running, consider using a process manager like systemd (on Linux) or a task scheduler like Windows Task Scheduler to ensure the script runs in the background.

Example with Windows Task Scheduler
Open Task Scheduler and create a new task.
Set the trigger to "Daily" and specify the time.
In the "Actions" tab, choose "Start a Program" and set the program/script to python and add the path to your script in the "Add arguments" field.
Example with systemd on Linux
Create a systemd service file:

Create a file named daily_email_report.service in /etc/systemd/system/.

[Unit]
Description=Daily Email Report

[Service]
ExecStart=/usr/bin/python3 /path/to/your/daily_email_report.py
Restart=always

[Install]
WantedBy=multi-user.target
Enable and start the service:


sudo systemctl enable daily_email_report.service
sudo systemctl start daily_email_report.service

By following these steps, you'll have a Python script that sends daily email reports, set up to run automatically at a specified time each day.
