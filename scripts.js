const fotos = [
  { url: 'https://source.unsplash.com/400x300/?surf', alt: 'Surf', categoria: 'esportes' },
  { url: 'https://source.unsplash.com/400x300/?volleyball', alt: 'Vôlei', categoria: 'esportes' },
  { url: 'https://source.unsplash.com/400x300/?nature', alt: 'Natureza', categoria: 'natureza' },
  { url: 'https://source.unsplash.com/400x300/?animal', alt: 'Animal', categoria: 'natureza' },
  { url: 'https://source.unsplash.com/400x300/?forest', alt: 'Floresta', categoria: 'natureza' },
];

function carregarGaleria(categoria = 'todas') {
  const galeria = document.getElementById('galeria-fotos');
  galeria.innerHTML = '';
  const filtradas = categoria === 'todas' ? fotos : fotos.filter(f => f.categoria === categoria);
  filtradas.forEach(foto => {
    const img = document.createElement('img');
    img.src = foto.url;
    img.alt = foto.alt;
    img.loading = "lazy";
    galeria.appendChild(img);
  });
}

function filtrarCategoria(categoria) {
  carregarGaleria(categoria);
}

document.addEventListener('DOMContentLoaded', () => {
  carregarGaleria();
  document.addEventListener('contextmenu', e => {
    e.preventDefault();
    alert('Proteção de imagem ativada.');
  });

  document.getElementById('form-contato').addEventListener('submit', e => {
    e.preventDefault();
    alert('Mensagem enviada! (simulação)');
    e.target.reset();
  });
});