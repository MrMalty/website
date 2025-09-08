<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="~/assets/img/computerservice.png"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h1
        class="text-4xl lg:text-6xl xl:text-7xl text-center font-bold lg:tracking-tight text-MainHeader"
      >
        Computer Servicing.
      </h1>
      <h2 class="text-xl lg:text-2xl xl:text-4xl text-center font-bold lg:tracking-tight text-MainHeader">$66/H</h2>
      <p class="text-lg mt-4 text-Primary max-w-xl">
        Our Computer Service provides complete solutions to keep your technology running smoothly. Whether it’s a slow computer, 
        a broken part, or software problems, we deliver fast and effective support to get you back up and running.
      </p>
      <ul class="grid mt-8 text-left gap-y-4">
        <li class="flex items-start gap-3 text-ServiceItems"><LandingTick className="w-6 h-6" /><b>Computer Repairs</b> – Fixing hardware and software issues</li>
        <li class="flex items-start gap-3 text-ServiceItems"><LandingTick className="w-6 h-6" /><b>Upgrades & Installations</b> – Hardware upgrades, SSD installs, RAM, and more</li>
        <li class="flex items-start gap-3 text-ServiceItems"><LandingTick className="w-6 h-6" /><b>System Tune-Ups</b> – Boosting speed and performance</li>
        <li class="flex items-start gap-3 text-ServiceItems"><LandingTick className="w-6 h-6" /><b>Networking & Internet Setup</b> – Wi-Fi troubleshooting and configuration</li>
        <li class="flex items-start gap-3 text-ServiceItems"><LandingTick className="w-6 h-6" /><b>Business IT Support</b> – Ongoing support for offices and small businesses</li>
      </ul>  
    </div>
    <!-- <LandingSectionhead>
      <template v-slot:title>Data Recovery</template>
      <template v-slot:desc>We specialize in recovering lost, deleted, corrupted, or inaccessible data
                            from a wide range of storage devices.<br />Whether the cause is accidental deletion, 
                            hardware failure, system crash, or malware infection, our advanced tools and 
                            techniques<br />give you the best chance of restoring valuable information.</template>
    </LandingSectionhead> -->
</main>
<div>
<LandingCsContactForm />
</div>
</template>



