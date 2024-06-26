import { useBoundStore } from '../../store';

function ZusTandTest() {
  //userSlice
  const users = useBoundStore((state) => state.users);
  const addUser = useBoundStore((state) => state.addUser);
  const removeUser = useBoundStore((state) => state.removeUser);

  //productSlice
  const products = useBoundStore((state) => state.products);
  const addProduct = useBoundStore((state) => state.addProduct);
  const removeProduct = useBoundStore((state) => state.removeProduct);

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          {user.name}
          <button onClick={() => removeUser(user.id)}>Remove</button>
        </div>
      ))}
      <button
        onClick={() => addUser({ id: users.length + 1, name: 'New User' })}>
        Add User
      </button>

      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          {product.name}
          <button onClick={() => removeProduct(product.id)}>Remove</button>
        </div>
      ))}
      <button
        onClick={() =>
          addProduct({ id: products.length + 1, name: 'New Product' })
        }>
        Add Product
      </button>
    </div>
  );
}

export default ZusTandTest;
