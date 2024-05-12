import React, { useState } from 'react';

const CardComponent = () => {
  // Sample data (replace this with your actual data)
  const data = [
   
   
    { imageSrc: 'https://media.licdn.com/dms/image/D4D03AQFlJfYNxBoCtg/profile-displayphoto-shrink_400_400/0/1682922226558?e=1720656000&v=beta&t=0APwFzTVfQDiZB2gAAXjtOmnbhHQPdg-oHe4Bs_ZbDw',
    subtitle: 'SDE Offer OFF Campus Microsoft', 
     content: 'Kumar K  Student Rashi Bhave - Cracked 48LPA Microsoft Off Campus Offer  as a fresher in recession. This was possible because we personally guided her before each interview round. Trained her hard for FAANG level OA + Interview.😍😍😇😇      ',
     student:'Rashi Bhave',
     companyLogo:'https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1723075200&v=beta&t=I0JQNx_M0gTi9QZpSEEb2fVrBL5geHnJ4xPJU-IPNpY'
   
   
   
   },
  
    {
      
      imageSrc: 'https://media.licdn.com/dms/image/D5603AQEEmONMfPojPA/profile-displayphoto-shrink_400_400/0/1712824265014?e=1720656000&v=beta&t=Bb089GshYLe7XGwTgJipI5oeiHa7Z8hfCGQ5An8Zy8U',
       subtitle: 'Tier-4 College to 40+ LPA',
      content: 'Kumar K Student  cracks off campus SDE Intern + Fulltime offer from Linkedin(40 LPA CTC) after 8 months of FAANG level DSA(OA + Interview) Training with us!',
      student:'Pranav Kulkarni',
      companyLogo:'https://cdn-icons-png.flaticon.com/256/174/174857.png'
    
    
    
    },
    { 
     
      imageSrc: 'https://media.licdn.com/dms/image/D5603AQHhZsBfAG3L_Q/profile-displayphoto-shrink_400_400/0/1678960662999?e=1720656000&v=beta&t=nELaxynAR5r9hNKHgw4FiubmuDRTOqA-oA7_dAhdCQ0',
     subtitle: 'Service Based to Product Based',
      content: 'Kumar K Student cracks Microsoft SDE Intern after 8 months of FAANG level DSA(OA + Interview) Training with us! ',
      student:'Ritik',
      companyLogo:'https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1723075200&v=beta&t=I0JQNx_M0gTi9QZpSEEb2fVrBL5geHnJ4xPJU-IPNpY'
    
    
    
    },
    { 
      imageSrc: 'https://media.licdn.com/dms/image/D5603AQGYk0DXoTezRg/profile-displayphoto-shrink_400_400/0/1692897677817?e=1721260800&v=beta&t=T5Q8rW9j1Ims5NXVqghynU6zPkEcI3Nc1E_5l2tpbyo',
      content: ' Kumar K Student cracked  LPA SDE-2 offer Offcampus at Visa after DSA + System Design Training + 1 -1 Mentoring from Kumar K',
      student:'Anirudha',
      companyLogo:'https://media.licdn.com/dms/image/C560BAQHTvZwCx4p2Qg/company-logo_200_200/0/1630640869849/amazon_logo?e=1723075200&v=beta&t=gxDvgk7WP-bzZOlZPG08BRESK7ErSJ1yLTjp0S6VOaI'
    
    },
    { 
      imageSrc: 'https://media.licdn.com/dms/image/D5603AQEcqK_KSatWMA/profile-displayphoto-shrink_400_400/0/1699625818095?e=1721260800&v=beta&t=Mhzx5yq4uUC_Q_RS3bp5Sw_1HcCzPgfLbVqTL5AM-xA',
      content: ' Kumar K Student cracks  SDE-2 offer  at BNY Mellon after working for 1.5 years in a service based company',
      student:'AKHIL B B ',
      companyLogo:'https://media.licdn.com/dms/image/D4E0BAQHFIQZwzMLdXA/company-logo_200_200/0/1688216120801/bny_mellon_logo?e=1723680000&v=beta&t=lE0V8qhfyRvNAoUU93rlhplgvezBs-Hf4bMfBmpwYCY'
    
    },
    { imageSrc: 'https://media.licdn.com/dms/image/D5603AQHr3Z2pTyQApg/profile-displayphoto-shrink_400_400/0/1682786318119?e=1720656000&v=beta&t=mDmLzTer2vTyx4-vbFsItP4rQPetMpC30Z7Crf9kx5c',
     subtitle: 'Service Based to Product Based',
      content: 'Kumar K Student Nidhi Kumari cracks 48 LPA Amazon offcampus SDE offer  after  8 months of FAANG level DSA(OA + Interview) Training with us!',
      student:'Nidhi Kumari',
      companyLogo:'https://media.licdn.com/dms/image/C560BAQHTvZwCx4p2Qg/company-logo_200_200/0/1630640869849/amazon_logo?e=1723075200&v=beta&t=gxDvgk7WP-bzZOlZPG08BRESK7ErSJ1yLTjp0S6VOaI'
    
    
    
    },
    { imageSrc: 'https://media.licdn.com/dms/image/D4D03AQG1XPejAClNAQ/profile-displayphoto-shrink_400_400/0/1689403647332?e=1720656000&v=beta&t=QTWKOoWhbSpwteAi2GUCUgpyRYV_xJPV1Klen6qxZbA',
    subtitle: 'Service Based to Product Based',
     content: 'Kumar K Student cracks Zomato Off Campus 28 LPA offer after 8 months of FAANG level DSA(OA + Interview) Training with us! ' ,
     student:'Dev',
     companyLogo:'https://media.licdn.com/dms/image/D4D0BAQGmF6yqRQAgCw/company-logo_200_200/0/1700453963264/zomato_logo?e=1723075200&v=beta&t=Fj5-_rLH8tumB4efKbH4EgSvrUzXKgsPvk2YY1w1EEM'
   
   
   
   },
   {
      
      
    imageSrc: 'https://media.licdn.com/dms/image/C4D03AQGQTEIoQ0mgWg/profile-displayphoto-shrink_400_400/0/1643017503745?e=1720656000&v=beta&t=m6b1CqTFt35VmqTFVTyQ55tzLsW9JzH-g9QRzPrKdwU',
     subtitle: 'Tier-4 College to 40+ LPA',
    content: 'Student cracks 18 LPA SDE Offer from Barclays after 8 months of FAANG level DSA(OA + Interview) Training with us!',
    student:'Gauri',
    companyLogo:'https://media.licdn.com/dms/image/C4E0BAQFAXc9z0Go7Uw/company-logo_200_200/0/1663677974291/barclays_bank_logo?e=1723075200&v=beta&t=Z-3OECGoyQAFPTOH_1YTTnD-7NiQzB3ZWmyFG9RiRKU'
  
  
  },
  { 
    imageSrc: 'https://media.licdn.com/dms/image/D4D03AQEP2u_SUeYuGw/profile-displayphoto-shrink_400_400/0/1688558564202?e=1721260800&v=beta&t=gJn9qOKKBWzVC5y3nRin5rJGWlyPc7LpszSNEy-Visk',
    content: 'Kumar K student with no job offer as 2023 CS Grad(was really worried) ends up cracking 4 offcampus offers of 12+LPA with maximum being 16LPA  because of 1-1 Mentoring + Off Campus Job Referral Support',      
    student:' Karrman'
  
  
  },
    { 
     
      imageSrc: 'https://res.cloudinary.com/dlxds69s7/image/upload/v1714758482/1706545184786_081b3289e9.jpg',
     subtitle: 'Service Based to Product Based',
      content: 'Kumar K Student cracks Off Campus SDE Offers from PhonePe and Precisely after 8 months of FAANG level DSA(OA + Interview) Training with us!',
      student:'Sharmistha Chakraborty',
      companyLogo:'https://i.pinimg.com/736x/2a/cf/b6/2acfb6fb41f7fcb82c3230afdecff714.jpg'
    
    
    
    },
    { 
      imageSrc: 'https://media.licdn.com/dms/image/C4D03AQHsOgL-NcI3xg/profile-displayphoto-shrink_400_400/0/1661341649527?e=1721260800&v=beta&t=q6Qdy3yi7UR2UnhA-42VVqxXoUwoXI4rAqmHz7ZTdb8',
      content: ' Kumar K student  cracks 22 LPA SDE Offer from Samsung after 8 months of FAANG level DSA(OA + Interview) Training with us! ',
      student:'Sheel Aggarwal',
      companyLogo:'https://media.licdn.com/dms/image/C560BAQH3lurqecHRug/company-logo_200_200/0/1630647495008/samsungresearch_logo?e=1723680000&v=beta&t=RCw_zJj7tzJ0Q2yLg-h3CPf8rcP7PZn0RY0e8meWf-U'
    
    },

    { imageSrc: 'https://res.cloudinary.com/dlxds69s7/image/upload/v1714758751/1621875901213_34818d34d2.jpg',
     subtitle: '5LPA Service based to 30LPA SDE Offer from Flipkart Product Based Company',
      content: ' Kumar K Student who was a DSA beginner and was working in service based company cracks 30 LPA Off Campus SDE Offer from Flipkart after 8 months of FAANG level DSA(OA + Interview) Training with us!',
      student:'Akhil Sharma',
      companyLogo:'https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/flipkart-512.png'
    
    
    
    },
    
    { imageSrc: 'https://media.licdn.com/dms/image/D4D03AQEEuGIU4_G0Fg/profile-displayphoto-shrink_400_400/0/1695391083005?e=1720656000&v=beta&t=8OtOZHo6cD5PlYojQpALGYJVzARoT9VHFqJtLPRZDDA',
     subtitle: 'Tier-3 College to Off-Campus SDE Offer from Swiggy', 
      content: 'Kumar K  student cracks  28LPA  BNY Mellon SDE Offer   ',
      student:' ANIMESH KUMAR KAR',
      companyLogo:'https://media.licdn.com/dms/image/D4E0BAQHFIQZwzMLdXA/company-logo_200_200/0/1688216120801/bny_mellon_logo?e=1723075200&v=beta&t=wKQ254shCfj8miXeoJ1SNaBeq_Bos3m33UcnPI7GyQs'
    
    },
    { 
     imageSrc: 'https://media.licdn.com/dms/image/D5635AQGPUqMjSHT2Lw/profile-framedphoto-shrink_400_400/0/1679582608781?e=1716148800&v=beta&t=4cWyVkvpI5T9oF-hLsrQYNOeKos6CuuuO3s2gqpgFaI',
     subtitle: 'Tier-3 College to 25LPA SDE offer off Campus from Cisco', 
      content: ' Kumar K student from  tier-3 college cracks 25 LPA Cisco Job offer  after 8 months of training for FAANG       ',
      student:'Aryennh Kulkarni',
      companyLogo:'https://media.licdn.com/dms/image/D560BAQFVQnYFvzs9jw/company-logo_200_200/0/1688482473854/cisco_logo?e=1723075200&v=beta&t=5awpsoBa3jtQMIy6gu4_r02tTUWOXpmqGyKatbYGXX4'
    },
    { 
      imageSrc: 'https://media.licdn.com/dms/image/D5603AQEQvPI8sQkiAg/profile-displayphoto-shrink_400_400/0/1708849374932?e=1721260800&v=beta&t=KjPRwINzJr4LP1bva3wDuzNh2rpw06P7DLZZG2o2uYQ',
      content: ' Kumar K Student cracks Intel 23LPA offer  after 8 months of training for FAANG ',
      student:'Suraj Singh.',
      companyLogo:'https://media.licdn.com/dms/image/C560BAQGpvWtEtj9oTQ/company-logo_200_200/0/1630663244735/intel_corporation_logo?e=1723680000&v=beta&t=ElxaULLp_jqA-e_8dBiYyBmwK7V_2ijlQIwARF9OC8E'
    
    },
   
    { imageSrc: 'https://media.licdn.com/dms/image/D4D03AQGaJt6TESaapQ/profile-displayphoto-shrink_400_400/0/1695703070779?e=1720656000&v=beta&t=k2iCGhTncrKQEuyzCKv3OjLKNPfN-EZlSFwMwoL6DHE',
     subtitle: 'Service Based to Product Based',
      content: ' Kumar K student with no job offer as 2023 Electrical Grad(was really worried) ended up cracking 18LPA OffCapmpus! 🥳🥳',
      student:'Prastuti',
      companyLogo:'https://media.licdn.com/dms/image/C560BAQHTvZwCx4p2Qg/company-logo_200_200/0/1630640869849/amazon_logo?e=1723075200&v=beta&t=gxDvgk7WP-bzZOlZPG08BRESK7ErSJ1yLTjp0S6VOaI'
    
    
    
    },
    { imageSrc: 'https://media.licdn.com/dms/image/D5603AQG9dphs1x-K1A/profile-displayphoto-shrink_400_400/0/1706723426164?e=1720656000&v=beta&t=zsWoY5m9AlfcHLRVDheqQ28LSlAWY1pY3mC7mVJnSjI',
     subtitle: 'Service Based to Product Based',
      content: 'Kumar K Student cracks 18 LPA SDE Offer from Barclays after FAANG level training for OA + Interview.',
      student:'Tanmay',
      companyLogo:'https://media.licdn.com/dms/image/C4E0BAQFAXc9z0Go7Uw/company-logo_200_200/0/1663677974291/barclays_bank_logo?e=1723075200&v=beta&t=Z-3OECGoyQAFPTOH_1YTTnD-7NiQzB3ZWmyFG9RiRKU'
    
    
    
    },
    { 
      imageSrc: 'https://media.licdn.com/dms/image/D5603AQFcy5jrnwuWSg/profile-displayphoto-shrink_400_400/0/1705079755734?e=1720656000&v=beta&t=HrFFQfhdOANbKYUfjN2luQP3CsFoQ_w8vN4caDjncuc',
     subtitle: 'SUBTITLE 1', title: 'Card Title 1',
      content: 'Student cracks Cisco (25LPA) after FAANG level training for OA + Interview',
      student:'Sai Soumyak Nanda      ',
      companyLogo:'https://media.licdn.com/dms/image/D560BAQFVQnYFvzs9jw/company-logo_200_200/0/1688482473854/cisco_logo?e=1723075200&v=beta&t=5awpsoBa3jtQMIy6gu4_r02tTUWOXpmqGyKatbYGXX4'
    
    },
    { imageSrc: 'https://media.licdn.com/dms/image/D5603AQFJKPKOF-Rl5g/profile-displayphoto-shrink_400_400/0/1711606930892?e=1720656000&v=beta&t=ykl73jSOGNtHmhRmAGFwkhFDvcLpiO4fxCwxXWyxMfU',
      content: 'Kumar K  student cracked 14 LPA job offer from Microchip   in just   2-3 months preparation from basic to advanced by our personalised Mentoring + Training + Course.(special support before the interview!)',
      student:'Shreeja ',
      companyLogo:'https://media.licdn.com/dms/image/C4D0BAQG-f4qx312otQ/company-logo_200_200/0/1630524516371/turvo_inc__logo?e=1723075200&v=beta&t=moWbOIobgha95_Dy-iSlgraubCDm0VCTjmLYvsZYhiA'
    
    
    
    },
    { imageSrc: 'https://res.cloudinary.com/dlxds69s7/image/upload/v1714758484/niki_1800b4b94e.jpg',
       subtitle: 'Tier-3 CStudent cracked 18 lpa SDE Offer Off-campus from product based company ExperianCard Title 1',
      content: ' Kumar K Student working in service based company cracks 18 lpa; product based company ',
      student:'Sandeep Nuka',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA8YK7FU2V3gD66wg6xPVbu3nHrOPVF71TXGUmLDhcrg&s'
    
    
    
    },
    { imageSrc: 'https://res.cloudinary.com/dlxds69s7/image/upload/v1714758482/1711283069934_fdf7315a95.jpg',
     subtitle: 'Tier-3 College to Microsoft', 
	    content: ' Kumar K Student cracks Microsoft Off Campus offer after 8 month FAANG level OA + Interview + CP training',
      student:'Sejal Aggarwal',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47O99cKOhd7xh1E-dXTsdFg8mwQZp3LWWCce3igRQ7g&s'
    
    
    
    },
    { imageSrc: 'https://res.cloudinary.com/dlxds69s7/image/upload/v1714758477/1706086206108_c232b1643f.jpg',
     subtitle: 'Tier-3 College to 28 LPA SDE Offer OFF Campus',

      content: ' Kumar K Student fully beginner at DSA; cracks ZScaler 28 LPA Offer after 5 month FAANG level DSA + OA + Mock Interview Training + 800 hour course!Anurag Tiwari',
      student:'Anurag Tiwari',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOhWEZ90hm__JMCXOeMPVQJdxOdwd4P46KkAKPwVIRQ&s'
    
    
    
    },
    { imageSrc: 'https://res.cloudinary.com/dlxds69s7/image/upload/v1714758482/1709047104228_24c4ba2efc.jpg',
     subtitle: 'SDE Offer OFF Campus Microsoft', 
      content: ' Kumar K student Cracks Microsoft SDE Offer Off Campus after training with us for 8 months!',
      student:'Vineeta Katlamudi',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47O99cKOhd7xh1E-dXTsdFg8mwQZp3LWWCce3igRQ7g&s'
    
    
    
    },
   
    { imageSrc: 'https://res.cloudinary.com/dlxds69s7/image/upload/v1714758477/1671459711386_415b4b690d.jpg',
     subtitle: '2023 Grad with Gap to Off campus SDE offer at Societe Generale',
      content: ' Kumar K Student with 2023 year of graduation cracks off campus SDE offer at Societe Generale; Top PBC despite having a gap of 8+ months.',
      student:'Abhishek Mishra',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKU7FQj7VG6wF6TsSHLVtjw6o0bAw-UllEmhDC66XonA&s'
    
    
    
    },
    { 
    imageSrc: 'https://res.cloudinary.com/dlxds69s7/image/upload/v1714758482/1706681234827_b16ecbe1b1.jpg',
     subtitle: 'Service Based to off Campus SDE offer at Ford Motor Company',
      content: ' Kumar K Student switched from service based to Product based company Ford 18 LPA  SDE Offer',
      student:'Surya',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVr6wS8AXnQG7eE4AfO_6_g7kxGZNmd4m7P-jNpWfwhA&s'
    
    
    
    },
    {
 imageSrc: 'https://res.cloudinary.com/dlxds69s7/image/upload/v1714758477/1706534638737_c21ad7c0e5.jpg',
     subtitle: 'Tier-3 College to OFF Campus SDE Offer', 
      content: ' Kumar K Student cracks Goldman Sachs OFF Campus SDE Offer after daily live training of 8 months.',
      student:'Prakriti Chatterjee',
      companyLogo:'https://1000logos.net/wp-content/uploads/2016/12/Goldman-Sachs-Logo.jpg'
    
    
    
    },
    { imageSrc: 'https://res.cloudinary.com/dlxds69s7/image/upload/v1714759744/1615099078037_bb914d2bf7.jpg',
     subtitle: 'Tier-3 College to Off-Campus SDE Offer from Swiggy', 
      content: ' Kumar K Student from tier-3 college; cracks SDE Offer from Swiggy by training super hard with us for DSA(OA + Interview) + LLD + HLD!',
      student:'Sarthak Rohtagi',
      companyLogo:'https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png'
    
    
    
    },
    { 
     

     imageSrc: 'https://res.cloudinary.com/dlxds69s7/image/upload/v1714759551/1631036513588_8fd792f9f2.jpg',
     subtitle: 'Tier-3 College to 25LPA SDE offer off Campus from Cisco', 
      content: ' Kumar K Student fully beginner at DSA; cracks Cisco 25 LPA Offer after 5 month FAANG level DSA + OA + Mock Interview Training + 800 hour course!',
      student:'Raj Kumar',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgZeYHBnxRPV0aXyjgSXiZOwQKHKMuY9U8yKtrPC39wQ&s'
    
    
    
    },
   
    { imageSrc: 'https://media.licdn.com/dms/image/D5635AQHjX0Ta7RNqGQ/profile-framedphoto-shrink_400_400/0/1707403013834?e=1716145200&v=beta&t=hZNINbLWodbmo27TEmYAOKtoFMZyZyaZ6Yocke2Grag',
     subtitle: 'Service Based to Product Based',
      content: ' Kumar K Student Jagadeesh cracks 18 LPA offcampus SDE offer after getting laid off from Infosys service based company',
      student:'Jagadeesh',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5Xo2UzT9P7pdNhS3E5b6IxfjYi9JbwuxbraSLzn8&s'
    
    
    
    },
    { imageSrc: 'https://media.licdn.com/dms/image/D4D35AQGahUK0xZ58wA/profile-framedphoto-shrink_400_400/0/1686406159450?e=1716145200&v=beta&t=jIlg25sptLcOGonD9GzCWG5GIy9qdXpLfXRYsxmOt-o',
     subtitle: 'Service Based to Product Based',
      content: ' Kumar K Student working in service based company cracks 11 lpa; product based company ',
      student:'Shivam Kedia',
      companyLogo:'https://media.licdn.com/dms/image/C560BAQFJk8h9TT-cZA/company-logo_200_200/0/1630637850862/eshopbox_logo?e=1723075200&v=beta&t=-QXQqGmDtdr5llUwwIOYghXoXnWyLuGrwrV1CuW_wh0'
    
    
    
    },
    
    { imageSrc: 'name.jpg',
     subtitle: 'Tier -3 to Cisco OFF campus',
      content: 'Kumar K Student Cracks Cisco after 8 month Faang level DSA + OA Training',
      student:'Naman Khurana.',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgZeYHBnxRPV0aXyjgSXiZOwQKHKMuY9U8yKtrPC39wQ&s'
    
    
    
    },
    { imageSrc: 'https://media.licdn.com/dms/image/D5603AQEZNo223WMZsg/profile-displayphoto-shrink_400_400/0/1709796930528?e=1720656000&v=beta&t=j8edMGA97Oi7_9MZkuPbfW3DS2TRYkplwd10mv5svb8',
     subtitle: 'SUBTITLE 1',
      content: 'Kumar K Student with 0 college placements cracks offcampus 10LPA offer from Zoho ',
      student:'Arunraj Vadivel',
      companyLogo:'https://w7.pngwing.com/pngs/939/823/png-transparent-zoho-office-suite-customer-relationship-management-zoho-corporation-email-computer-software-email-miscellaneous-text-trademark.png'
    
    
    
    },
    { imageSrc: 'https://media.licdn.com/dms/image/C4E03AQGrZXCIUEf9Qw/profile-displayphoto-shrink_400_400/0/1604503189883?e=1720656000&v=beta&t=JXWRr48m3sWE4jDVXKMV7S2ZUxFjdWA65ArnrC2oEAo',
     subtitle: 'SUBTITLE 1', title: 'Card Title 1',
      content: 'Kumar K Student who was constantly failing for 8 months cracks 15 LPA; SDE offer from Fiserv',
      student:'Dhruv Pandey ',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSloHS51wFKaN9GYkVZw1JDqV4ZzPCeyZl8TvBukHpINQ&s'
    
    },
{ imageSrc: 'https://media.licdn.com/dms/image/D4D35AQGsbl3NQeZfsA/profile-framedphoto-shrink_400_400/0/1700460070643?e=1716145200&v=beta&t=83XxxEL4GzsrLTFkpSy75nYM2uZSsTKpeYlwMTQieWE',
     subtitle: 'Tier-3 to OffCampus remote from Germany', 
      content: ' Kumar K Student cracks Offcampus remote offer from Germany despite being from tier-3 college.',
      student:'Nandhu Aripelli',
      companyLogo:'https://media.licdn.com/dms/image/C4D0BAQH7MIYxJmGxYA/company-logo_200_200/0/1630511846408/techatcore_logo?e=1723075200&v=beta&t=Y7MR91-O-yX66NN3577sJcRcC1_G5zjcKSmXT5I3slE'
    
    },
    
    { imageSrc: 'https://media.licdn.com/dms/image/D4D03AQHIgE68DOVAvg/profile-displayphoto-shrink_400_400/0/1688485326343?e=1721260800&v=beta&t=H97AeRcwxPdjjPs6d1SpBrLjWUdVwDZQQbdqA52_0yM',
     subtitle: 'SUBTITLE 1', title: 'Card Title 1',
      content: 'Kumar K Student cracks ZScaler after 8 month training for FAANG level OA + Interview. ',
      student:'Aarav Srivastava',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOhWEZ90hm__JMCXOeMPVQJdxOdwd4P46KkAKPwVIRQ&s'
    
    },
{ imageSrc: 'https://media.licdn.com/dms/image/D4D03AQH9L1CPSQIZLg/profile-displayphoto-shrink_400_400/0/1701627241138?e=1720656000&v=beta&t=fn_EbbQH_5ssLZ74PxpxZQyRX8rmX5VKKNDq9eoKcYQ',
     subtitle: 'Tier-3 to OffCampus remote from Germany', 
      content: 'Kumar K Student cracks Zeta Intern + FTE Offcampus after training hard for FAANG level OA + Interview from the Kumar K 800 hour course!.',
      student:'Khushboo Agarwal',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZqnA4SkOp7SuTJ11s1hk2rg0391QS0kG7o_-jj71VA&s'
    
    },

  {
      
      
      imageSrc: 'https://media.licdn.com/dms/image/D4D03AQGARsO5H5qG_w/profile-displayphoto-shrink_400_400/0/1699906348586?e=1720656000&v=beta&t=Sh2BZI0aTx1nvRhbchuT-jTWTRvhz-q3dMKYNCXK4mc',
       subtitle: 'Tier-4 College to 40+ LPA',
      content: 'Kumar K Student cracks 18 LPA offer from HP despite working at 3lpa service based company in just 5 months!',
      student:'Jaiminkumar Pranchal',
      companyLogo:'https://media.licdn.com/dms/image/D560BAQEZ6ZVjZmwiwA/company-logo_200_200/0/1692312131432/hp_logo?e=1723075200&v=beta&t=TVM2serltaLxeQOFblVKILQ5x0X3ysgs4F4ECrXH4LQ'
    
    
    
    },
    { 
     
      imageSrc: 'https://media.licdn.com/dms/image/D4D03AQHwI1X0z6vKlw/profile-displayphoto-shrink_400_400/0/1693673158066?e=1720656000&v=beta&t=RSBwl4k2LhfD265ImvyJfzIJmPEyxUQuunC4lZeniPw',
     subtitle: 'Service Based to Product Based',
      content: 'Kumar K Student who god laid off from 3LPA job cracks 38 LPA senior engineer offer off campus at BT Group',
      student:'Priyanshi Srivastava',
      companyLogo:'https://media.licdn.com/dms/image/D4E0BAQFcyvjY35EvXA/company-logo_200_200/0/1663653523168/bt_logo?e=1723075200&v=beta&t=KWHrmpOrNb1WA4dlT0VmWL8Jl3dwdGqPyFfo7u2orN4'
    
    
    
    },
    { imageSrc: 'https://media.licdn.com/dms/image/D4D03AQHtKZ4bWAhj4A/profile-displayphoto-shrink_400_400/0/1699183297900?e=1720656000&v=beta&t=oQGYEbQvggpLoG0r8SCXFsuB_IIL08C9JyvVrbh2PcU',
     subtitle: '5LPA Service based to 30LPA SDE Offer from Flipkart Product Based Company',
      content: 'Kumar K Non IT background student with years of gap cracks 28 lpa SDE Offer Offcampus!',
      student:'Bharat Goyal ',
      companyLogo:'https://media.licdn.com/dms/image/C510BAQHpvvPkljPmBA/company-logo_200_200/0/1630592245829/kapturecrm_logo?e=1723075200&v=beta&t=gY9TjXcdevOc6RjTYjJAPqeCLGDC-WSrY1Es2A4Jr-k'
    
    
    
    },
    { imageSrc: 'https://media.licdn.com/dms/image/D4E03AQEdI8NINf_COw/profile-displayphoto-shrink_400_400/0/1695188301237?e=1720656000&v=beta&t=UyjdcT8pzO9lS9KupF87zpja4Y_K3GvBH7TaXNhJXC8',
       subtitle: 'Tier-3 CStudent cracked 18 lpa SDE Offer Off-campus from product based company ExperianCard Title 1',
      content: 'Kumar K Student cracks Cisco SDE Intern + Full Time off campus by undergoing FAANG level OA + Interview Training  ',
      student:'Animesh Bajpai ',
      companyLogo:'https://media.licdn.com/dms/image/D560BAQFVQnYFvzs9jw/company-logo_200_200/0/1688482473854/cisco_logo?e=1723075200&v=beta&t=5awpsoBa3jtQMIy6gu4_r02tTUWOXpmqGyKatbYGXX4'
    
    
    
    },
    { imageSrc: 'https://media.licdn.com/dms/image/D4D03AQH4ghpvp_pIwg/profile-displayphoto-shrink_400_400/0/1671891683709?e=1720656000&v=beta&t=OX2Koj7EZqewmLwnRwIuPBfq_Et1Bf03QX2e-PhbxM4',
     subtitle: 'Tier-3 College to Microsoft', 
	    content: ' Kumar K Student cracked Paypal Intern + Full Time offer after training super hard for FAANG LEVEL DSA(OA + interview!)',
      student:'Harshit Raj.',
      companyLogo:'https://media.licdn.com/dms/image/D560BAQEBi1qAFwOeEg/company-logo_200_200/0/1705414740395/paypal_logo?e=1723075200&v=beta&t=_J1q9qrcJlqRQTHUbxSA2KkCjXZMNU9yaCQ7mUyW2NE'
    
    
    
    },
    { imageSrc: 'https://media.licdn.com/dms/image/C4D03AQE7lRVlMufujA/profile-displayphoto-shrink_400_400/0/1589869105106?e=1720656000&v=beta&t=yyNzr7Y9fbgoNgSpoocF48T2PzxutOI7Fkk-u8L3fp4',
     subtitle: 'Tier-3 College to 28 LPA SDE Offer OFF Campus',
      content: ' Kumar K Student with 2 years experience in service based cracks 38 LPA SDE-2 offers at Lenskart + Gupshup + WayFair + Kindred Group       ',
      student:'Aalia Lokhandwala.',
      companyLogo:'https://media.licdn.com/dms/image/D4D0BAQEkk9hkG6ODLA/company-logo_200_200/0/1699330852755/lenskart_com_logo?e=1723075200&v=beta&t=Jl-0eCUVc0-8yaO7XFlKo_pX8aD-bwNqaaa4SiZAa0E'
    
    
    
    },
    { imageSrc: 'https://media.licdn.com/dms/image/D5603AQHDFRPTC_FSww/profile-displayphoto-shrink_400_400/0/1704130849503?e=1721260800&v=beta&t=gMe9EczDl0FwzcMMp0f9oQSX7VOsSbtsqUwAy-SI7Es',
     subtitle: 'SDE Offer OFF Campus Microsoft', 
      content: ' Kumar K Student with 0 job offer as 2023 Grad cracks off campus Salesforce SDE Offer 28 LPA',
      student:'Umang Sharma.',
      companyLogo:'https://media.licdn.com/dms/image/C560BAQHZ9xYomLW7zg/company-logo_200_200/0/1630658255326/salesforce_logo?e=1723075200&v=beta&t=Q47sSMCuTSutnsaNjpGb_t2TG8nfBNXelzANJuEsKmM'
    
    
    
    },
   
    { imageSrc: 'https://media.licdn.com/dms/image/D4D35AQFZ1-M24VhBuQ/profile-framedphoto-shrink_400_400/0/1699421510619?e=1716145200&v=beta&t=fmC96n4tEihNytC71MU2eQeIqOeUPTMQdfpOLBitgtU',
     subtitle: '2023 Grad with Gap to Off campus SDE offer at Societe Generale',
      content: ' Kumar K Student who used to fail interviews and online test cracks 18 lpa remote international SDE offer from US based company Avaya      .',
      student:'Sarthak Jatale',
      companyLogo:'https://media.licdn.com/dms/image/D560BAQFJQ1Wqi0SZUg/company-logo_200_200/0/1687139747706/avaya_logo?e=1723075200&v=beta&t=Km4xV8BS5d6V1tBucnLR3ULsPnOYGEYI6jBlkSqExwE'
    
    
    
    },
    { 
    imageSrc: 'https://media.licdn.com/dms/image/D4D03AQFvTY2bntKjCQ/profile-displayphoto-shrink_400_400/0/1700048455551?e=1720656000&v=beta&t=L_lqKfdC4ajQPnM8cLGQiTbyLiVqOa-QDvgtKiqrbXQ',
     subtitle: 'Service Based to off Campus SDE offer at Ford Motor Company',
      content: 'Kumar K Student cracks 31 LPA Blackrock offer after training hard for 8 months and never missing a single session!.',
      student:'Niraj Kumar.',
      companyLogo:'https://media.licdn.com/dms/image/D4E0BAQFFLPdR-R9FWA/company-logo_200_200/0/1688389221906/blackrock_logo?e=1723075200&v=beta&t=wuCN9PIug1YSOHJsLEO1oVYRv9pi5r2stJe4lW3SJL8'
    
    
    
    },
    {
 imageSrc: 'https://media.licdn.com/dms/image/D5603AQG6AnzbiPDW3A/profile-displayphoto-shrink_400_400/0/1705593289513?e=1720656000&v=beta&t=3AjCf9CCXjRegrRqfO9a8REcWNtQ2lhllNmkEX4TcOc',
     subtitle: 'Tier-3 College to OFF Campus SDE Offer', 
      content: ' Kumar K Student cracks Walmart SDE Intern + Full Time; after 8 months of daily live training for FAANG level OA + Interview.       .',
      student:'Anusheel',
      companyLogo:'https://media.licdn.com/dms/image/C560BAQE4Th_qgWovfg/company-logo_200_200/0/1655487552700/walmart_logo?e=1723075200&v=beta&t=AxM9kxJNZ4PZvhJLL91CarKA2ZaF_mJPETkDGyG5Yog'
    
    
    
    },
    { imageSrc: 'https://media.licdn.com/dms/image/D5603AQGh_Vybbdzmdg/profile-displayphoto-shrink_400_400/0/1700021314611?e=1720656000&v=beta&t=gRHpL0fCWetTVlivUwWUKCGbsKcL4nn40P7M2Umy-Is',
     subtitle: 'Tier-3 College to Off-Campus SDE Offer from Swiggy', 
      content: ' Kumar K Student Despite being a DSA beginner and 2 years experience at service based company Cognizant ;  cracks senior Engineer role off campus at OpenText + Fed-Ex.      ',
      student:'Ashmita  Senapati',
      companyLogo:'https://media.licdn.com/dms/image/D4D0BAQE-_igjtgZLgg/company-logo_200_200/0/1688150302277/opentext_logo?e=1723075200&v=beta&t=_EDl8yIBW0CT6Q28l6D7ZGzr221hxquH4kv2TSIq6rY'
    
    
    
    },
    { 
     

     imageSrc: 'https://media.licdn.com/dms/image/D4D35AQE3NYsLCjN-bQ/profile-framedphoto-shrink_400_400/0/1693494320735?e=1716145200&v=beta&t=BhvNMrOwxZt9RAvHwkGX419T9OMMvRNy6fpmPsKcxVs',
     subtitle: 'Tier-3 College to 25LPA SDE offer off Campus from Cisco', 
      content: ' Kumar K 2024 Grad student cracks 12 LPA SDE Role in top tech startup       ',
      student:'Ayushi Sood',
      companyLogo:'data:image/png;base64,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'
    
    
    
    },
   
    
    
    
    { 
      imageSrc: 'https://media.licdn.com/dms/image/D4D03AQEuW4O0oP9Y8w/profile-displayphoto-shrink_400_400/0/1692704891780?e=1721260800&v=beta&t=SyNOcWVLNsprrOq-psj7XX5AW2lVAQTHIwYudtmr__A',
     subtitle: 'Tier -3 to Cisco OFF campus',
      content: 'Kumar K Student cracks 18 LPA Full Time SDE offer at Juniper Networks. after 8 month Faang level DSA + OA Training',
      student:'Raghav Singhal',
      companyLogo:'https://media.licdn.com/dms/image/D560BAQHs1l2oz4krEw/company-logo_200_200/0/1686866548188/juniper_networks_logo?e=1723075200&v=beta&t=ZU1RQe03dZZBI8Msd8gsGtoQlqZo4ly9-SrTtx59Zfo'
    
    
    
    },
    { imageSrc: 'https://media.licdn.com/dms/image/C4D03AQF5wkRG29RhwQ/profile-displayphoto-shrink_400_400/0/1655786756826?e=1720656000&v=beta&t=6qhmndKIAOHNaWpUFamzEPa_vj6eNxOC1fKqBPrgsEk',
     subtitle: 'SUBTITLE 1',
      content: 'Kumar K Student cracks 25LPA Samsung SDE Offer',
      student:'Koustav Halder',
      companyLogo:'https://media.licdn.com/dms/image/C560BAQH3lurqecHRug/company-logo_200_200/0/1630647495008/samsungresearch_logo?e=1723075200&v=beta&t=rze_CBfN2IZ1mlZwm1hUqPn9Kwa8ccZkEgx4j7RJVz0'
    
    },
    { imageSrc: 'https://media.licdn.com/dms/image/D5603AQGrEzuDluHoIw/profile-displayphoto-shrink_400_400/0/1702316684710?e=1720656000&v=beta&t=plgmvSiYp7uoPGZOe285Tj6FD-h5LUyfAPh23xs_ZRQ',
     subtitle: 'SUBTITLE 1', title: 'Card Title 1',
      content: ' Kumar K Student with 2 years experience in service based company Infosys cracks 28 LPA TOP PBC Off Campus!',
      student:'Santosh. ',
      companyLogo:'https://media.licdn.com/dms/image/D4E0BAQGX1UlSsTe8uA/company-logo_200_200/0/1666879844897/rocket_software_logo?e=1723075200&v=beta&t=9zzRDVRpBF9KeNar0pYK_ylbxbManv-zKDKHIL14L2M'
    
    },
{ imageSrc: 'https://media.licdn.com/dms/image/D4D03AQEj8Mnq_7ufKw/profile-displayphoto-shrink_400_400/0/1695354710976?e=1720656000&v=beta&t=w4ArsB_h-X8EevR_LqUJX40pMJqAmOgeNimybyEKxmg',
     subtitle: 'Tier-3 to OffCampus remote from Germany', 
      content: ' Kumar K  student cracked 18 LPA SDE offer  in just 2-3 months of preparation.',
      student:'Aastha Singh',
      companyLogo:'https://media.licdn.com/dms/image/D560BAQG2HVLlNUxOcw/company-logo_200_200/0/1688354573894/hsbc_logo?e=1723075200&v=beta&t=I0s1zlOKBgJ8gDCP1nmxIwqzF09TTq5fo6Bi9FWOKDM'
    
    },
    
   
{ imageSrc: 'https://media.licdn.com/dms/image/C4E03AQG8IuqRLeyBGw/profile-displayphoto-shrink_400_400/0/1650301660534?e=1720656000&v=beta&t=ER82qhOCF2b59rVmMUz7A4uTDv8xKSNcjxjkKKuLRY8',
     subtitle: 'Tier-3 to OffCampus remote from Germany', 
      content: 'Kumar K  𝐬𝐭𝐮𝐝𝐞𝐧𝐭 𝐰𝐡𝐨 𝐟𝐚𝐢𝐥𝐞𝐝 𝐭𝐨 𝐜𝐫𝐚𝐜𝐤 7.5𝐋𝐏𝐀 𝐛𝐮𝐭 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐜𝐫𝐚𝐜𝐤𝐬 17.5𝐋𝐏𝐀 𝐨𝐟𝐟𝐞𝐫 from HP ',
      student:'Dixit Bansal',
      companyLogo:'https://media.licdn.com/dms/image/D560BAQEZ6ZVjZmwiwA/company-logo_200_200/0/1692312131432/hp_logo?e=1723075200&v=beta&t=TVM2serltaLxeQOFblVKILQ5x0X3ysgs4F4ECrXH4LQ'
    
    },

    
    
    { imageSrc: 'https://media.licdn.com/dms/image/D5603AQG_4qYfUiYK4Q/profile-displayphoto-shrink_400_400/0/1707666765499?e=1720656000&v=beta&t=jfHieGNrLYglXJeyDOkilxVYZ72MTtjxkoQHmWkcf5w',
       subtitle: 'Tier-3 CStudent cracked 18 lpa SDE Offer Off-campus from product based company ExperianCard Title 1',
      content: 'Kumar K student crack 20 LPA Zscaler SDE(Intern + PPO) Offer ',
      student:'Aman Gupta',
      companyLogo:'https://media.licdn.com/dms/image/D560BAQFyKYkPLfu8OQ/company-logo_200_200/0/1688573892674/zscaler_logo?e=1723075200&v=beta&t=Pt-SqofAzzyE5Wk-63GXnfQuDBNKBJi8xwehpQTZ3Ew'
    
    
    
    },
   
    { imageSrc: 'https://media.licdn.com/dms/image/D5635AQFuHkhUzF6uzg/profile-framedphoto-shrink_400_400/0/1704541561420?e=1716148800&v=beta&t=ErW3q0xkHEqKuGDaY2MNlFn1nI3Vij7uQ4cOoAS85zg',
     subtitle: 'Tier-3 College to Microsoft', 
	    content: 'Kumar K Student working at service based company cracks 22 LPA off campus job offer at top tech startup ',
      student:'Diwakar Singh',
      companyLogo:'https://media.licdn.com/dms/image/D4D0BAQGMc2jFfxb3Aw/company-logo_200_200/0/1697444516143/mybetterplace_logo?e=1723075200&v=beta&t=ICD7NaP-IS0KHnoQnLCNmU2LrL8zkjBOQtaSfSBAm28'
    
    
    
    },
    { imageSrc: 'https://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
     subtitle: 'Tier-3 College to 28 LPA SDE Offer OFF Campus',
      content: 'On 12th October Student cracked 18 LPA SDE Offer at Barclays! ',
      student:'Saniya Inamdar',
      companyLogo:'https://media.licdn.com/dms/image/C4E0BAQFAXc9z0Go7Uw/company-logo_200_200/0/1663677974291/barclays_bank_logo?e=1723075200&v=beta&t=Z-3OECGoyQAFPTOH_1YTTnD-7NiQzB3ZWmyFG9RiRKU'
    
    
    
    },
   
    { 
    imageSrc: 'https://media.licdn.com/dms/image/D5603AQHSxg2wbA3jyQ/profile-displayphoto-shrink_400_400/0/1703266393588?e=1720656000&v=beta&t=KNpWTX2pkIY3Q3EQidtTBWL4TPkyneONDv4YVya9V1E',
     subtitle: 'Service Based to off Campus SDE offer at Ford Motor Company',
      content: 'Kumar K student cracked an 18 LPA job offer at top tech  Product Based Company Hyland and switch from service based Company Cognizant ',
      student:'Kushal Banik ',
      companyLogo:'https://media.licdn.com/dms/image/D560BAQE2p8Fwq79hVg/company-logo_200_200/0/1708362831939/hyland_software_logo?e=1723075200&v=beta&t=KJl41oitJ8RG6T-8TjTAF4ySm-hNMKTMDoWi-80EZa8'
    
    
    
    },
    {
 imageSrc: 'https://media.licdn.com/dms/image/D4D03AQHflfiLvF-mQg/profile-displayphoto-shrink_400_400/0/1680658724813?e=1720656000&v=beta&t=fUWBcjEV3NUPpWHq4h3Py5qToe0FZT-CpGcxwx-E46E',
     subtitle: 'Tier-3 College to OFF Campus SDE Offer', 
      content: 'Kumar K  student cracks 14LPA HFT -> Intern + PPO  after training for FAANG level OA + Interview ',
      student:'Mohammed Kaif Ahmed. ',
      companyLogo:'https://futuresfirst.com/wp-content/uploads/2019/12/ff.png'
    
    
    
    },
    
    
    { imageSrc: 'https://media.licdn.com/dms/image/D4D35AQFKkf9cN-O9Og/profile-framedphoto-shrink_400_400/0/1704797518105?e=1716148800&v=beta&t=7C9ubTg83IGa79rtsBElu2nXH1hkbB3d_DPoEoSAU_M',
     subtitle: 'Tier -3 to Cisco OFF campus',
      content: 'On August 21 ; student cracked (19 LPA) Deutsche Bank job offer after training super hard for DSA + OA + CS Fundamentals!',
      student:'Jyoti',
      companyLogo:'https://media.licdn.com/dms/image/D4E0BAQGXkGRHDj-Fxw/company-logo_200_200/0/1704888489705?e=1723075200&v=beta&t=AVb2SqHE0OpL-y787MAUZV0C52T3ycjZEgF7gZOEMF8'
    
    
    
    },
    { imageSrc: 'selec.jpg',
      content: 'Kumar K  student cracked an offer(19 LPA.) from Oracle!',
      student:'Ayush Kumar      ',
      companyLogo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzGrJVTLOQpQrrUCvfuKBGW57xddOpAkUJCalDZkiwQ&s'
    
    },
    
    { imageSrc: 'https://media.licdn.com/dms/image/C5603AQHLFX1pIRQnTA/profile-displayphoto-shrink_400_400/0/1651824112976?e=1720656000&v=beta&t=EZTayCe8pxCsPunxMG3HuImwUMjAaogfWwVMzhScB6g',
     subtitle: 'Tier-3 to OffCampus remote from Germany', 
      content: ' Kumar K Student cracks 13 LPA offer off campus From Manhettan Associates',
      student:'Mrinal Mohan.',
      companyLogo:'https://media.licdn.com/dms/image/D560BAQEQG5_5QHXyVg/company-logo_200_200/0/1698243555606/manhattan_associates_logo?e=1723075200&v=beta&t=FL_ixqGALGCJau0L0TLVeNjM2s6fu17zZR43z5TGeyE'
    
    },
    
    { 
      imageSrc: 'https://media.licdn.com/dms/image/D5603AQGQVadxDpMqeg/profile-displayphoto-shrink_400_400/0/1707728107015?e=1720656000&v=beta&t=BQpozayTqXh4XHiBHZPs8P7hYTlP7efvbvZxkfkKM6A',
      content: ' Kumar K Student laid off in recession cracks 12LPA offer in Akami Tech. ',
      student:'Mrunmai Dahare.',
      companyLogo:'https://media.licdn.com/dms/image/C4D0BAQH0GWKi72Rndw/company-logo_200_200/0/1630551559761/akamai_technologies_logo?e=1723075200&v=beta&t=cyGvZPDmWdyDxMpHVWnno6ce0F1RwECKkCcOtauwmFg'
    
    },
    { 
      imageSrc: 'https://media.licdn.com/dms/image/D5603AQGM3hG6JfaSmg/profile-displayphoto-shrink_400_400/0/1696567597255?e=1721260800&v=beta&t=GeUxQWRXMoOgNE6ogSYAh2LKJacrJC_5KoA1vIG_OOg',
      content: ' Kumar K  student  cracks SDE Intern at GoldMan Sachs ',
      student:'KARAN SARAWAGI',
      companyLogo:'https://media.licdn.com/dms/image/C4E0BAQHm5bYK6emQSg/company-logo_200_200/0/1630621204188/goldman_sachs_logo?e=1723680000&v=beta&t=dW6Xms2iwoahprq7k2jXROrBtGu0iYX6yNfU5WCFYh0'
    
    },

    
    { 
      imageSrc: 'https://media.licdn.com/dms/image/D5635AQGmZKEI3XUHYg/profile-framedphoto-shrink_400_400/0/1682653967429?e=1716152400&v=beta&t=_Ze_9xvHUX0qNxELlMY_NSaqlYUKagcqgnoFrANSPRw',
      content: ' Kumar K Student working at service based company TCS 3LPA cracks 14LPA  in CDOT  ',
      student:'Ankit Sharma',
     
    
    },

    
    { 
      imageSrc: 'https://media.licdn.com/dms/image/D4D03AQHZRfgJB2V0MQ/profile-displayphoto-shrink_400_400/0/1709395257890?e=1721260800&v=beta&t=antT5AHNggP_WztPhwVOq3R2rQ3Hn8pgQARuwTHzyOs',
      content: ' Kumar K student Cracks Flipkart Group(ClearTrip) SDE Offer after training with us for 8 months!. ',
      student:'Hemandra Mehta',
      companyLogo:'https://media.licdn.com/dms/image/D560BAQEkB52cEDJLrA/company-logo_200_200/0/1712813460612/cleartrip_logo?e=1723680000&v=beta&t=3idILxU697d7sfXEF8cRbA0LTqgFQ80K7C2gWqx_Z8c'
    
    },
    
    
    

    

   
  ];

  const [cardsToShow, setCardsToShow] = useState(60);
  const [cards, setCards] = useState(data);

  const handleViewMore = () => {
    setCardsToShow(cards.length); // Show all cards
  };

  return (
    <section className="text-gray-600 body-font bg-gradient-to-r to-red-50 from-yellow-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0 ">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 textc text-gray-900">Our 100    Recent Selections</h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div> 
        </div>
        <div className="flex flex-wrap -m-4">
          {cards.slice(0, cardsToShow).map((card, index) => (
            <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" bg-white rounded-lg p-6 shadow-lg hover:shadow-lg transition duration-400">
              <img className="h-50 rounded w-full object-cover object-center mb-6" src={card.imageSrc}
               alt="content" />
                <h2 className="text-lg text-gray-900   font-sans font-medium  mb-4">{card.content}</h2>
                <div className="flex items-center justify-between">
                  <p className="leading-relaxed text-base font-bold text-black">{card.student}</p>
                  <img src={card.companyLogo} className="w-8 h-8 object-cover rounded-full" alt="company logo" />
                </div>
              </div>
            </div>
          ))}
        </div>
        {cardsToShow < cards.length && (
          <div className='flex flex-col items-center justify-center'>
            <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleViewMore}>
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CardComponent;