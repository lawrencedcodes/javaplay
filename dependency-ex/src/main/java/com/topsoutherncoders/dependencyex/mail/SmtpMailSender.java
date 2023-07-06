package com.topsoutherncoders.dependencyex.mail;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class SmtpMailSender implements MailSender {

    private static Log log = LogFactory.getLog(SmtpMailSender.class);
    @Override
    public void send(String to, String subject, String body) {
        log.info("Smtp mail has been sent to " + to);
        log.info("Subject is: " + subject);
        log.info("Message Body is: " + body );
    }
}
