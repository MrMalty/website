<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="~/assets/img/virusclean.png"
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
        Virus Cleaning.
      </h1>
      <h2>$120/H</h2>
      <p class="text-lg mt-4 text-Primary max-w-xl">
        Our Virus Cleaning Service is designed to completely remove viruses, malware, spyware, 
        and other malicious threats from your computer. We don’t just run a quick scan — we 
        provide a thorough inspection and cleaning process to ensure your system is safe, stable, 
        and performing properly.
      </p>
      <ul class="grid mt-8 text-left gap-y-4">
        <li class="flex items-start gap-3 text-ServiceItems"><LandingTick className="w-6 h-6" />Full system diagnostics and virus detection</li>
        <li class="flex items-start gap-3 text-ServiceItems"><LandingTick className="w-6 h-6" />Removal of viruses, spyware, ransomware, and trojans</li>
        <li class="flex items-start gap-3 text-ServiceItems"><LandingTick className="w-6 h-6" />Cleaning of malicious files, programs, and browser hijackers</li>
        <li class="flex items-start gap-3 text-ServiceItems"><LandingTick className="w-6 h-6" />Performance and security optimization</li>
        <li class="flex items-start gap-3 text-ServiceItems"><LandingTick className="w-6 h-6" />Repair of damaged system files and settings</li>
        <li class="flex items-start gap-3 text-ServiceItems"><LandingTick className="w-6 h-6" />Installation or update of antivirus and security tools</li>
        <li class="flex items-start gap-3 text-ServiceItems"><LandingTick className="w-6 h-6" />Professional in-office, in-home or remote cleaning</li>
        <li class="flex items-start gap-3 text-ServiceItems"><LandingTick className="w-6 h-6" />Safe backup and protection of important files (where possible)</li>
        <li class="flex items-start gap-3 text-ServiceItems"><LandingTick className="w-6 h-6" />Final system scan to confirm your PC is virus-free</li>
        <li class="flex items-start gap-3 text-ServiceItems"><LandingTick className="w-6 h-6" />Security advice and prevention tips</li>
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
<LandingVcContactForm />
</div>
</template>



