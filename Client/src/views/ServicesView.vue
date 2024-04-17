<template>
      <body class="container text-center w-100%  text-dark">
        <div class="col align-self-start">
        <div class="row w-100% mt-4 mx-auto bg-light">
            <h1 class="pt-4 justify-self-start">Services Page</h1>
            <p class="pt-4">Here you will find a detailed list of the services offered.</p>
        </div>
        <div class="row w-75 mt-5 mx-auto  bg-red">
            <p>Cards with Service, discription, times, and prices. Also a schedule now button</p> 
        </div>
        <div class="card-container row justify-content-md-center">
            <div class="card w-75">
              <div class="card-body">
                <h5 class="card-title">Standard Massage</h5>
                <img src="../assets/massage.jpg" alt="Standard Massage" class="card-img-left float-start">
                <p class="card-text col-8 float-end">Our standard massage service offers a rejuvenating experience, tailored to relieve tension, reduce stress, and promote overall well-being. Our skilled therapists employ various techniques such as Swedish, deep tissue, and aromatherapy to address specific concerns and provide a personalized session. Whether seeking relaxation or targeting muscle soreness, clients can expect a soothing atmosphere and professional care to leave them feeling refreshed and revitalized.
                </p>
                <a href="#" class="btn btn-primary">Schedule Now</a>
              </div>
            </div>
            <div class="card w-75">
              <div class="card-body">
                <h5 class="card-title">Deep Tissue Massage</h5>
                <img src="../assets/deeptissue.jpg" alt="Deep Tissue" class="card-img-left float-start">
                <p class="card-text col-8 float-end">Our deep tissue massage is designed to alleviate chronic muscle tension and discomfort by targeting the deeper layers of muscle tissue. Through firm pressure and focused techniques, our experienced therapists work to release knots and adhesions, promoting better circulation and range of motion. Ideal for those with chronic pain or tight muscles, this therapeutic massage aims to provide relief, improve flexibility, and restore balance to the body. Clients can expect a personalized approach to address their specific needs in a calming environment.
                </p>
                <a href="#" class="btn btn-primary ">Schedule Now</a>
              </div>
            </div>
            <div class="card w-75">
              <div class="card-body">
                <h5 class="card-title">Cupping</h5>
                <img src="../assets/cupping.jpg" alt="Cupping Therapy" class="card-img-left float-start">
                <p class="card-text col-8 float-end">Our cupping massage therapy utilizes specialized cups placed on the skin to create suction, drawing blood flow to specific areas and promoting healing. This ancient technique is known for its ability to release tension, alleviate pain, and improve circulation. During the session, our skilled therapists strategically move the cups across the body, helping to loosen muscles, reduce inflammation, and detoxify tissues. Whether seeking relief from muscle stiffness, chronic pain, or stress, clients can expect a unique and rejuvenating experience that targets both physical and energetic imbalances, leaving them feeling relaxed and revitalized.
                </p>
                <a href="#" class="btn btn-primary">Schedule Now</a>
              </div>
            </div>
        </div>
        </div>
    </body>
   
</template>

<style>
body{
    background-color: #205a5a;

}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
