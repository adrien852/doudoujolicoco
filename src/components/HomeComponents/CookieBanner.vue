  <template>
    <div v-if="cookieStore.cookiesAccepted === null" class="cookie-banner">
      <div class="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        <p class="mb-3 mb-md-0">
          Ce site utilise Google Analytics pour améliorer l'expérience utilisateur. Acceptez-vous l'utilisation des cookies ?
        </p>
        <div class="button-group">
          <button class="btn accept-btn me-2" @click="cookieStore.acceptCookies">Accepter</button>
          <button class="btn decline-btn" @click="cookieStore.declineCookies">Refuser</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>  
  import { useCookieStore } from "@/stores/cookieStore";

  const cookieStore = useCookieStore();

  </script>
  
  <style>
  .cookie-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.77);
    color: #22211F; /* Darker text for readability */
    padding: 15px 0;
    z-index: 1050;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
  }
  
  .cookie-banner p {
    font-size: 1rem;
    color: #4a3f35;
    text-align: center;
  }
  
  .button-group {
    display: flex;
    gap: 10px;
  }
  
  .btn {
    border-radius: 25px;
    padding: 8px 20px;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease-in-out;
  }
  
  .accept-btn {
    background-color: #F39E6A;
    color: white;
    border: none;
  }
  
  .accept-btn:hover {
    color: white;
    background-color: #d48b5e;
  }
  
  .decline-btn {
    background-color: white;
    color: #d48b5e;
    border: 2px solid #d48b5e;
  }
  
  .decline-btn:hover {
    background-color: #d48b5e;
    color: white;
  }
  </style>
  