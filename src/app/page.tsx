import React from "react"

const page = () => {
  return(
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:rounded-n rounded-full mx-auto" src="/profile pic.jpg" alt="" width="200" height="300"></img>
  <div className="pt-6 md:p-8 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Hello! 
        I am Abdullah Arif from Tranda Saway Khan. I have recently completed Matric. Now want to gain a skill So, I choose Generative AI.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Abdullah Arif
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        AI Student 
      </div>
    </figcaption>
  </div>
  </figure></div>
  )
}

export default page