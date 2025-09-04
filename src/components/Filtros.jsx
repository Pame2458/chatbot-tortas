// Filtros.jsx
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Categorias from './Categorias.jsx';
import { useNavigate } from 'react-router-dom';

function Filtros({ onFiltroChange }) {
  const categorias = ["Todos", "Tortas", "Cupcakes", "Cookies"];
  const navigate = useNavigate()
  return (
    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', alignItems: 'center', my: 2, flexWrap: 'wrap' }}>
      <Button
      onClick={()=>navigate("/categorias")}
      sx={{backgroundColor: '#f8bbd0', color: 'black', '&:hover': { backgroundColor: '#f48fb1' } }}>Categorías</Button>
      {/* Botones de categorías */}
      {categorias.map((cat) => (
        <Button
          key={cat}
          variant="contained"
          size="small"
          onClick={() => onFiltroChange(cat)}
          sx={{ backgroundColor: '#f8bbd0', color: 'black', '&:hover': { backgroundColor: '#f48fb1' } }}
        >
          {cat}
        </Button>
      ))}

      {/* Barra de búsqueda (no funcional por ahora) */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #ccc',
          borderRadius: 1,
          px: 1,
          py: 0.5,
          backgroundColor: 'white',
        }}
      >
        <InputBase
          placeholder="Buscar..."
          inputProps={{ 'aria-label': 'buscar' }}
          sx={{ ml: 1, flex: 1 }}
        />
        <IconButton type="button" sx={{ p: '5px' }} aria-label="buscar">
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Filtros;

