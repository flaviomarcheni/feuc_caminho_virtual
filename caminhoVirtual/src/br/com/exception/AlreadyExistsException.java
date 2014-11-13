package br.com.exception;

/**
 * Classe responsável por representar uma exeção específica para o caso de tentativa de persistência de um objeto que já existe.
 */
public class AlreadyExistsException extends Exception {
	private static final long serialVersionUID = 1L;

	@Override
	public String getMessage() {	
		return "Este produto já existe";
	}
	
	
}
