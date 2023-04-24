package org.dromara.web.controller;

import cn.dev33.satoken.annotation.SaCheckLogin;
import jakarta.validation.constraints.NotBlank;
import lombok.extern.slf4j.Slf4j;
import org.dromara.common.core.domain.R;
import org.dromara.common.mail.service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 邮件服务
 *
 * @author hexm
 * @date 2023/02/03 14:33
 */
@Slf4j
@Validated
@RestController
@RequestMapping("/system/config/mail")
@SaCheckLogin
public class MailController {

    @Autowired
    private MailService mailService;

    /**
     * 发送测试邮件
     *
     * @param toMail 收件人邮箱
     * @return
     */
    @PostMapping("/sendTestMail")
    public R<Void> sendTestMail(@NotBlank(message = "收件人邮箱不能为空") String toMail) {
        mailService.sendText(toMail, "Mail配置测试邮件", "Mail配置测试邮件");
        return R.ok();
    }
}
