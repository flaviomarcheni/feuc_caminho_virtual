package br.com.ipnet.projeto.dao;

import java.io.Serializable;
import java.util.List;



import br.com.exception.AlreadyExistsException;
import br.com.ipnet.projeto.beans.Onibus;

import com.googlecode.objectify.NotFoundException;
import com.googlecode.objectify.ObjectifyService;

/**
 * Classe responsável por definir um padrão de comportamento na camada de persistência. Deve ser estendida por todos os DAOs
 * das entidades. 
 * @author r4z3c
 *
 * @param <T>
 */
public abstract class DAO<T> implements Serializable {
	private static final long serialVersionUID = 1L;
	
	protected Class<T> classe;
	
	/**
	 * Método responsável por persistir um objeto. Antes de persistir ele verifica se a UniqueKey da entidade está sendo
	 * violada, essa verificação é feita a partir do método {@link DAO#getByUniqueKey(Object)}. Se este método retornar
	 * algum registro, e este registro for diferente (possuir o id. diferente) do objeto que está sendo persistido, lança
	 * uma exceção informando que aquele objeto já existe.
	 * 
	 * @param o {@link Object} - Objeto a ser persistido.
	 * @throws {@link AlreadyExistsException} Caso o objeto já exista.
	 * @throws Exception
	 */
	public void put(T o) throws Exception{
		ObjectifyService.begin().put(o);
	}
	
	/**
	 * Método responsável por recuperar um objeto a partir do id.
	 * 
	 * @param id Identificador de referencia.
	 * @return Objeto encontrado.
	 * @throws NotFoundException Caso nenhum objeto seja encontrado a partir do id. informado.
	 * @throws Exception
	 */
	public T get(Long id) throws Exception {
		return ObjectifyService.begin().get(this.classe, id);
	}
	
	/**
	 * Método responsável por deletar um objeto.
	 * @param o Objeto a ser removido.
	 * @throws Exception
	 */
	public void delete(T o) throws Exception{
		ObjectifyService.begin().delete(o);
	}
	
	/**
	 * Método responsável por lista todos os registros de uma entidade.
	 * @return Lista de registros.
	 */
	public List<T> list(){
		return ObjectifyService.begin().query(this.classe).list();
	}
	
	
	public DAO(Class<T> classe) {
		this.classe = classe;
		
	}

	public Class<T> getClasse() {
		return classe;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
}
