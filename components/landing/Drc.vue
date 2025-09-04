<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="~/assets/img/dr.png"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h1
        class="text-4xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight text-MainHeader"
      >
        Data Recovery.
      </h1>
      <p class="text-lg mt-4 text-Primary max-w-xl">
        We specialize in recovering lost, deleted, corrupted, or inaccessible data
        from a wide range of storage devices. Whether the cause is accidental deletion, 
        hardware failure, system crash, or malware infection, our advanced tools and 
        techniques give you the best chance of restoring valuable information.
      </p>
      <ul class="grid mt-8 text-left gap-y-4">
        <li class="flex items-start gap-3 text-ServiceItems"><LandingTick className="w-6 h-6" />Hard Drive & SSD Recovery</li>
        <li class="flex items-start gap-3 text-ServiceItems"><LandingTick className="w-6 h-6" />USB & External Drive Recovery</li>
        <li class="flex items-start gap-3 text-ServiceItems"><LandingTick className="w-6 h-6" />Laptop & Desktop Data Retrieval</li>
        <li class="flex items-start gap-3 text-ServiceItems"><LandingTick className="w-6 h-6" />Malware or Ransomware Attacks Recovery</li>
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
  Test
</div>
</template>



