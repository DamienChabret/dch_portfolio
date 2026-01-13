namespace api.Services
{
   public interface IBaseServiceInterface<T>
   {
      public Task<T> GetById(string idEntity);
      public Task<List<T>> GetAll();
      public Task Create(T entity);
   }
}