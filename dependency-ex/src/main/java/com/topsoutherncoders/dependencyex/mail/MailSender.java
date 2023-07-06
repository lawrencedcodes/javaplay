package com.topsoutherncoders.dependencyex.mail;

public interface MailSender {
    void send(String to, String subject, String body);
}
