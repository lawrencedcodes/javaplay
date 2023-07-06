package com.topsoutherncoders.dependencyex.controllers;

import com.topsoutherncoders.dependencyex.mail.MailSender;
import com.topsoutherncoders.dependencyex.mail.MockMailSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MailController {

    @Autowired
    public MailController(MailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Autowired
    public void setMailSender(MailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Autowired
    private MailSender mailSender;

    @RequestMapping("/mail")
    public String mail() {
        mailSender.send("Marcus@coolmarcus.com", "Computer down", "I opnened my laptop to the blue screen of death. Please advise");
        return "Email sent.";
    }
}

