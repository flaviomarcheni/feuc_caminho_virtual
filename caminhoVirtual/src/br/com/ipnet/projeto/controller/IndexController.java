package br.com.ipnet.projeto.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import br.com.ipnet.projeto.service.OnibusService;

@Controller
//@RequestMapping("/onibus")
public class IndexController {

	@Autowired
	private OnibusService serviceOnibusService;
	
	@RequestMapping(value = "/feuc", method = RequestMethod.GET)
	public String  index () {
		return "pages/index";
	}
	
	
	
	
	
}