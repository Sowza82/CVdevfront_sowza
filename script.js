const infos = {
    nome: 'Sowza82 Dev',
    cargo: 'Dev Front-end',
    imagem: 'https://github.com/sowza82.png',
    minibio: ' Apesar de estar no início da minha jornada, estou dedicando tempo e energia para dominar as ferramentas fundamentais do desenvolvimento front-end, como HTML, CSS e JavaScript. Cada linha de código que escrevo é uma oportunidade de aprendizado e crescimento, e estou empolgada para explorar todas as possibilidades que o desenvolvimento web oferece.💖',
    github: 'https://github.com/Sowza82',
    linkedin: 'https://www.linkedin.com/in/sowza82-tatiane-6a9519273',
    instagram: 'https://www.instagram.com/tathysowza_82/'
  };
  
  document.getElementById('imagem').src = infos.imagem;
  document.getElementById('nome').innerHTML = infos.nome;
  document.getElementById('cargo').innerHTML = infos.cargo;
  
  document.getElementById('github').href = infos.github;
  document.getElementById('linkedin').href = infos.linkedin;
  document.getElementById('instagram').href = infos.instagram;
  
  document.getElementById('minibio').innerHTML = infos.minibio;