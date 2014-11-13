package br.com.ipnet.projeto.util;

public class EstadoFactory {

	public static String getSiglaUFByDDD(String ddd) {
		String siglaUF = "";
		
		if(ddd == null || ddd.trim().equals("")){
			return siglaUF;
		}
		ddd = ddd.trim();
		if(ddd.equals("11") || ddd.equals("12") || ddd.equals("13") || ddd.equals("14") ||
		   ddd.equals("15") || ddd.equals("16") || ddd.equals("17") || ddd.equals("18") ||
		   ddd.equals("19")){
			siglaUF = "SP";
		}else if(ddd.equals("31") || ddd.equals("32") || ddd.equals("33") || ddd.equals("34") ||
				ddd.equals("35") || ddd.equals("37") || ddd.equals("38")){
			siglaUF = "MG";
		}else if(ddd.equals("21") || ddd.equals("22") || ddd.equals("24")){ 
			siglaUF = "RJ";
		}else if(ddd.equals("71") || ddd.equals("73") || ddd.equals("74") ||
				ddd.equals("75") || ddd.equals("77") ){
			siglaUF = "BA";
		}else if(ddd.equals("51") || ddd.equals("53") || ddd.equals("54") ||
				ddd.equals("55") ){
			siglaUF = "RS";
		}else if(ddd.equals("41") || ddd.equals("42") || ddd.equals("43") ||
				 ddd.equals("44") || ddd.equals("45") || ddd.equals("46")){
			siglaUF = "PR";
		}else if(ddd.equals("91") || ddd.equals("93") || ddd.equals("94")){
			siglaUF = "PA";
		}else if(ddd.equals("47") || ddd.equals("48") || ddd.equals("49")){
			siglaUF = "SC";
		}else if(ddd.equals("85") ||ddd.equals("88") ){
			siglaUF = "CE";
		}else if(ddd.equals("81") || ddd.equals("87")){
			siglaUF = "PE";
		}else if(ddd.equals("92") || ddd.equals("97")){
			siglaUF = "AM";
		}else if(ddd.equals("27") || ddd.equals("28") ){
			siglaUF = "ES";
		}else if(ddd.equals("98") || ddd.equals("99") ){
			siglaUF = "MA";
		}else if(ddd.equals("65") || ddd.equals("66")){
			siglaUF = "MT";
		}else if(ddd.equals("62") || ddd.equals("64")){
			siglaUF = "GO";
		}else if(ddd.equals("86") || ddd.equals("89")){
			siglaUF = "PI";
		}else if(ddd.equals("83")){
			siglaUF = "PB";
		}else if(ddd.equals("82")){
			siglaUF = "AL";
		}else if(ddd.equals("61")){
			siglaUF = "DF";
		}else if(ddd.equals("63")){
			siglaUF = "TO";
		}else if(ddd.equals("79")){
			siglaUF = "SE";
		}else if(ddd.equals("96")){
			siglaUF = "AP";
		}else if(ddd.equals("84")){
			siglaUF = "RN";
		}else if(ddd.equals("67")){
			siglaUF = "MS";
		}else if(ddd.equals("69")){
			siglaUF = "RO";
		}else if(ddd.equals("68")){
			siglaUF = "AC";
		}else if(ddd.equals("95")){
			siglaUF = "RR";
		}
		
		return siglaUF;
	}

}
