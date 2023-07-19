import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
const Blog = () => {
  const articles = [
    {
      title: 'How to Choose the Right Mobile Device',
      description: "The physical ruggedness of any device is of critical importance, especially when deployed in harsh industrial environments, such as the warehouse or on the manufacturing floor. The devices must be able to withstand countless drops, accidental spills, extreme temperatures, and dust or dirt. In a hospital, devices need to be made of special plastic that can prevent spread of bacteria and withstand chemical-based disinfectant wipe-downs In addition businesses need to consider how the users will use the device and predict the challenges they might have. For example, if a worker is wearing gloves when handling a mobile computer or need to carry goods with both hands all the time, voice-enabled applications will be helpful and facilitative for the task at hand. In a hospital setting, devices with quieter and less obstructive feedback modes would be ideal so no patients will be disturbed when the nurses operate the devices",
      img: 'https://digitogy.com/wp-content/uploads/2019/01/mobile-phones.jpeg',

    },
    {
      title: 'Comparing Mobile Device Models: A Comprehensive Guide',
      description: 'Phone-sized is a visual phone size comparison tool. Although its called phone-sized, we do list also tablets in our database as well. The intention is to enable users to view how different device differ in size compared to other mobile devices. You can also use this smartphone comparison tool to see the real size of your device. There is an option to add a credit card image which you can enlarge to match your credit card, which they will resize the other images so they will be presented in their real-life size.I ve created two main comparison modes: side-by-side and stacked. In the side by side view mode, as its name suggests, you can view the mobile devices side by side and observe their size difference. With the stacked comparison mode, you can see the device stacked one on top of the other. I ve also created an option to view the device only in its outline looks, so its easier to compare the devices when they are stacked up.We have an extensive list of mobile devices, including those from the following companies among others: Apple, Samsung, HTC, Huawei, Asus, Amazon, Acer, Microsoft, LG, Meizu, Xiaomi, Vodafone, ZTE, Sony, Nokia, OnePlus, Oppo, Samsung and many others.I am updating the website on a regular basis by adding newly announced devices to the database. If you find a device that isnt listed and you want me to add it, just contact me on Twitter and I will do my best to add it as soon as possible.The latest feature Ive added, allows you to see the dimension difference in mm, inches and percentage. The select buttons are located below each mobile device. You can only compare two devices. Once you choose the second smartphone or tablet, youll see the textual comparison information above the mobile device images. Click the select button again to deselect it and select another one instead. The comparison is done relative to the second device. For example, youll see if the first device is larger, smaller, thinner, thicker, narrower or taller than the second device you are comparing it to. Alternatively, you can first select the second device and the first one to have the reverse comparison with the second device is dimensions expressed in relation to the first one. More features to come, stay tuned.When you add more than one mobile phone or tablet, a share link will appear, allowing you to obtain a short URL, so you can easily share that specific comparison you are currently viewing on Facebook, Twitter, LinkedIn, QZone, Weibo, Reddit, etc.',
      img: 'https://thumbs.dreamstime.com/b/modern-smartphones-touchscreen-interface-mobility-telecommunication-technology-concept-group-color-mobile-phones-33718710.jpg',
    },
    {
      title: 'Troubleshooting Common Mobile Device Issues',
      description: 'One of the common mobile phone problems people still face to date is low storage space. It doesnt matter if youve got a phone with 128GB of storage or more; your phone would certainly run out of capacity after storing a whole lot of things on it. Well, the solution is that you almost don’t have to store anything on your phone, talk less of filling up the storage, in today’s era. Even if all you have is 32GB of storage or less, you can live happily without worrying about the messy “Storage space running out” notifications.First, wed recommend you scan your device with the Files by Google app from the Play Store. The app tells you everything taking up your phone storage and help you get rid of them comfortably.Additionally, you should delete every app, video, and other files you don’t need on your device.Continue by backing up your photos (and videos) to the cloud with Google Photos. Doing so allows you to delete the heavy local files to reduce storage usage. Not just that, your photos (and videos) remains in the cloud forever and syncs across all your devices that have your Google account signed into.',
      img: 'https://public.carlcare.com/public/7b527877657f0ee1103dbce9a9a60bc4.jpg',
    }
  ];

  return (

<section data-aos="fade-right" className=" text-black py-8 mx-auto px-4 lg:w-3/6 bg-slate-100">
<div className="container  font-primary ">
 
  <div className="flex flex-col gap-4">
    {articles.map((article, index) => (
    <div>
     <img className="w-[600px] h-96 mx-auto rounded my-6" src={article.img} alt="" />
       <h1 className="lg:text-3xl text-lg font-bold mb-3">{article.title}?</h1>
     <p>{article.description}</p>
    </div>
    ))}
  </div>
</div>
</section>

  );
};

export default Blog;
