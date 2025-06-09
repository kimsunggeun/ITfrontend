<template>
    <footer class="footer">
      <div class="footer-content">
        <p class="copyright">© 2024 All Rights Reserved.</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  </script>
  
  <style scoped>
  .footer {
    background-color: #f8f9fa;
    padding: 12px 0;

  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding: 0 1rem;
  }
  
  .copyright {
    color: #6c757d;
    font-size: 0.9rem;
    margin: 0;
  }

  </style>