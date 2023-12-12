import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../redux/categories/categorySlice';
import { CardCategoria } from './CategoriasStyles';

export const Categoria = ({ title, category, changeCategory }) => {
  const selectedCategory = useSelector(
    state => state.categories.selectedCategory
  );

  const dispatch = useDispatch();

  return (
    <CardCategoria
      onClick={() => {
        dispatch(selectCategory(category));
        changeCategory(category);
      }}
      whileTap={{ scale: 0.95 }}
    >
      <h2>{title}</h2>
    </CardCategoria>
  );
};

export default Categoria;