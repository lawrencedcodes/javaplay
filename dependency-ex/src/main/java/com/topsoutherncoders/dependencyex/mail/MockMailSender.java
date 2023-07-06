package com.topsoutherncoders.dependencyex.mail;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Component;

@Component
public class MockMailSender implements MailSender {

    private static Log log = LogFactory.getLog(MockMailSender.class);
    @Override
    public void send(String to, String subject, String body) {
        log.info("Mail has been sent to " + to);
        log.info("Subject: " + subject);
        log.info("Message: " + body );
    }
}
