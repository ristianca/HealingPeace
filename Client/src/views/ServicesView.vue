<template>
  <body class="container text-center text-dark pad-top">
    <div class="grid-container">
      <div class="row">
        <div class="col">
          <h1 class="justify-self-start text-light titleSplash">Our Services</h1>
        </div>
      </div>

      <div class="row pb-3">
        <div class="col">
          <p class="card-text">Here you will find a detailed list of the services offered.</p>
        </div>
      </div>

      <div class="row g-3 mb-3">
        <div class="col-md-6">
          <div class="card mb-3 h-100" style="">
            <div class="row h-100 g-0">
              <div
                class="col-md-4 img-background"
                style="
                  max-height: 400px;
                  min-height: 300px;
                  background-image: url('../src/assets/deeptissue-1.jpg');
                "
              >
                <p></p>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title">Deep Tissue Massage</h3>
                  <p class="card-text">
                    Our deep tissue massage is designed to alleviate chronic muscle tension and
                    discomfort by targeting the deeper layers of muscle tissue. Through firm
                    pressure and focused techniques, our experienced therapists work to release
                    knots and adhesions, promoting better circulation and range of motion. Ideal for
                    those with chronic pain or tight muscles, this therapeutic massage aims to
                    provide relief, improve flexibility, and restore balance to the body. Clients
                    can expect a personalized approach to address their specific needs in a calming
                    environment.
                  </p>
                  <p class="card-text fw-bold">
                    <small><a class="card-link" href="/">Schedule Now</a></small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card mb-3 h-100" style="">
            <div class="row h-100 g-0">
              <div
                class="col-md-4 img-background"
                style="
                  max-height: 400px;
                  min-height: 300px;
                  background-image: url('../src/assets/cupping-1.jpg');
                "
              >
                <p></p>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title">Cupping Therapy</h3>
                  <p class="card-text">
                    Our cupping massage therapy utilizes specialized cups placed on the skin to
                    create suction, drawing blood flow to specific areas and promoting healing. This
                    ancient technique is known for its ability to release tension, alleviate pain,
                    and improve circulation. Whether seeking relief from muscle stiffness, chronic
                    pain, or stress, you can expect a unique and rejuvenating experience that
                    targets both physical and energetic imbalances, leaving you feeling relaxed and
                    revitalized.
                  </p>
                  <p class="card-text fw-bold">
                    <small><a class="card-link" href="/">Schedule Now</a></small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-3">
        <div class="col">
          <div class="card mb-3 h-100" style="">
            <div class="row h-100 g-0">
              <div
                class="col-md-4 img-background"
                style="
                  max-height: 400px;
                  min-height: 300px;
                  background-image: url('../src/assets/massage-1.jpg');
                "
              >
                <p></p>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title">Standard Massage</h3>
                  <p class="card-text">
                    Our standard massage service offers a rejuvenating experience, tailored to relieve tension, reduce stress, and promote overall well-being. Our skilled therapists employ various techniques such as Swedish, deep tissue, and aromatherapy to address specific concerns and provide a personalized session. Whether seeking relaxation or targeting muscle soreness, clients can expect a soothing atmosphere and professional care to leave them feeling refreshed and revitalized.
                  </p>
                  <p class="card-text fw-bold">
                    <small><a class="card-link" href="/">Schedule Now</a></small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  </body>
</template>

<style>
.card {
  background-color: #2d3e41c7;
  color: white;
}

.img-background {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-top-left-radius: var(--bs-border-radius) !important;
  border-top-right-radius: var(--bs-border-radius) !important;
}

h1 {
    color: white;
    width: fit-content;
    max-width: 100vw;
    align-content: space-evenly;
    margin: auto;
    font-family: 'Tangerine', cursive;
    text-shadow: rgb(0, 48, 49) 1px 0 10px;
    font-weight: 700;
        font-size: 4rem;
}

.card-text {
  color: white;
  font-family: "Comfortaa", sans-serif;
  font-size: 0.9rem;
  line-height: 1.3rem;
  text-shadow: rgb(0, 48, 49) 1px 0 10px;
}

.card-title {
  font-family: "Averia Serif Libre", serif;
  text-shadow: rgb(0, 48, 49) 1px 0 10px;
}

.card-link {
  font-family: "Averia Serif Libre", serif;
  font-size: 1.25rem;
  font-weight: bold;
}

@media (min-width: 768px) {
  .img-background {
    border-top-left-radius: var(--bs-border-radius) !important;
    border-top-right-radius: 0 !important;
    border-bottom-left-radius: var(--bs-border-radius) !important;
    border-bottom-right-radius: 0 !important;
  }
}
</style>
