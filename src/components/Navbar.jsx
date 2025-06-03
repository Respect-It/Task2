import React from 'react';
import {useState} from 'react';

export default function Navbar() {
  const [showmenu, setShowMenu]= useState(false)
  const handletoggle= () => (
    setShowMenu(!showmenu)
  )
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="Mystore">Store</a>
    <button class="navbar-toggler" onClick={handletoggle} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      {
      showmenu? <i class="bi bi-x-circle"></i> : <span class="navbar-toggler-icon"></span>
}
    </button>
    <div class={`collapse navbar-collapse ${showmenu ? 'show' : ' '}`}  id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Top <Products></Products></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}
