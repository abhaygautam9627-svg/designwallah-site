
function toggleMenu(){
  const menu = document.getElementById('heroMenu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function openPrivacy(){
  document.getElementById('privacyOverlay').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closePrivacy(){
  document.getElementById('privacyOverlay').style.display = 'none';
  document.body.style.overflow = 'auto';
}

