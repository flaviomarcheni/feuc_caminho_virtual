package br.com.ipnet.projeto.util;

import java.util.Properties;
import java.util.logging.Logger;

import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeUtility;


public class GoogleUtil {
	
	
		//Dados Homologacao
	//public static final String EMAIL_SISTEMA = "PARP <no-reply@tim-mobile-ipnet.appspotmail.com>";

	
	
	// Dados de Produção
	public static final String EMAIL_SISTEMA = "TIM <no-reply@tim-mobile-dev.appspotmail.com>";

	/**
	 * Este método é responsável por enviar um e-mail.
	 * @param from {@link String} - O endereço de e-mail do remetente. 
	 * @param recipes {@link String[]} - Os endereços de e-mail dos destinatários.
	 * @param assunto {@link String} - O assunto do e-mail.
	 * @param mensagem {@link String} - O corpo do e-mail.
	 * @throws Exception
	 */
	
	public void sendMail(String[] recipes, String assunto, String mensagem) throws Exception {
		Properties props = new Properties();
        Session session = Session.getDefaultInstance(props, null);
        
        System.out.println(mensagem);
        
    	Message msg = new MimeMessage(session);
    	
    	//endereco de email do aplicativo
        msg.setFrom(new InternetAddress(EMAIL_SISTEMA));	      
        for(String recipe : recipes)
        	msg.addRecipient(Message.RecipientType.TO, new InternetAddress(recipe));

        //msg.addRecipient(Message.RecipientType.TO, new InternetAddress("flavio.andrade@ipnetsolucoes.com.br"));
        
        
        msg.setSubject(MimeUtility.encodeText(assunto, "utf-8", "B"));
        msg.setContent(mensagem,"text/html; charset=utf-8");
        msg.saveChanges();
        Logger.getLogger(getClass().getName()).warning(mensagem);
        System.out.println(mensagem);
        Transport.send(msg);

	}
}