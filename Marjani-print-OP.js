const style = document.createElement('style');
style.innerHTML = `
  @media print {
    @page {
      size: auto !important;
      margin: 0 !important;
    }
  }
  
  print-preview-layout-settings,
  print-preview-more-settings {
    display: block !important;
    visibility: visible !important;
  }
`;
document.head.appendChild(style);
