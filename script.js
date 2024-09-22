
const tiffins=[
    {
        "name": "Idli",
        "description": "Steamed rice cakes, typically served with sambar and chutney.",
        "image": "https://example.com/images/idli.jpg",
        "price": "₹30"
    },
    {
        "name": "Dosa",
        "description": "A thin, crispy crepe made from fermented rice and lentil batter.",
        "image": "https://example.com/images/dosa.jpg",
        "price": "₹40"
    },
    {
        "name": "Vada",
        "description": "A deep-fried lentil doughnut-like snack, usually enjoyed with sambar.",
        "image": "https://example.com/images/vada.jpg",
        "price": "₹25"
    },
    {
        "name": "Sambar",
        "description": "A spicy, tangy lentil soup with vegetables, often served with idli or dosa.",
        "image": "https://example.com/images/sambar.jpg",
        "price": "₹35"
    },
    {
        "name": "Chutney",
        "description": "A side condiment made from various ingredients like coconut, mint, or tomatoes.",
        "image": "https://example.com/images/chutney.jpg",
        "price": "₹20"
    },
    {
        "name": "Uttapam",
        "description": "A thick, pancake-like dish topped with onions, tomatoes, and other vegetables.",
        "image": "https://example.com/images/uttapam.jpg",
        "price": "₹50"
    },
    {
        "name": "Rawa Kesari",
        "description": "A sweet semolina dessert flavored with saffron and garnished with nuts.",
        "image": "https://example.com/images/rawa_kesari.jpg",
        "price": "₹45"
    },
    {
        "name": "Pongal",
        "description": "A savory rice and lentil porridge cooked with spices and ginger.",
        "image": "https://example.com/images/pongal.jpg",
        "price": "₹40"
    },
    {
        "name": "Masala Dosa",
        "description": "A dosa filled with a spicy potato mixture.",
        "image": "https://example.com/images/masala_dosa.jpg",
        "price": "₹60"
    },
    {
        "name": "Medu Vada",
        "description": "Round, deep-fried lentil doughnuts often served with sambar.",
        "image": "https://example.com/images/medu_vada.jpg",
        "price": "₹30"
    },
    {
        "name": "Appam",
        "description": "A fermented rice pancake with a soft, spongy center and crispy edges.",
        "image": "https://example.com/images/appam.jpg",
        "price": "₹50"
    },
    {
        "name": "Kothu Parotta",
        "description": "Shredded parotta mixed with vegetables or meat and spices.",
        "image": "https://example.com/images/kothu_parotta.jpg",
        "price": "₹70"
    },
    {
        "name": "Kuzhi Paniyaram",
        "description": "Small, round savory bites made from fermented rice and lentil batter.",
        "image": "https://example.com/images/kuzhi_paniyaram.jpg",
        "price": "₹40"
    },
    {
        "name": "Bonda",
        "description": "Deep-fried snack made from spiced potato filling encased in a gram flour batter.",
        "image": "https://example.com/images/bonda.jpg",
        "price": "₹35"
    },
    {
        "name": "Dhokla",
        "description": "A steamed, spongy snack made from fermented rice and chickpea batter.",
        "image": "https://example.com/images/dhokla.jpg",
        "price": "₹30"
    },
    {
        "name": "Sambar Vada",
        "description": "Vada soaked in spicy sambar, often served as a combined dish.",
        "image": "https://example.com/images/sambar_vada.jpg",
        "price": "₹45"
    },
    {
        "name": "Pesarattu",
        "description": "Green gram crepes often served with ginger chutney.",
        "image": "https://example.com/images/pesarattu.jpg",
        "price": "₹50"
    },
    {
        "name": "Rawa Dosa",
        "description": "Crispy dosa made from semolina batter with optional fillings.",
        "image": "https://example.com/images/rawa_dosa.jpg",
        "price": "₹50"
    },
    {
        "name": "Coconut Rice",
        "description": "Rice cooked with grated coconut, spices, and herbs.",
        "image": "https://example.com/images/coconut_rice.jpg",
        "price": "₹45"
    },
    {
        "name": "Puliyodarai",
        "description": "Tamarind rice cooked with spices and peanuts.",
        "image": "https://example.com/images/puliyodarai.jpg",
        "price": "₹40"
    },
    {
        "name": "Curd Rice",
        "description": "Rice mixed with yogurt and seasoned with mustard seeds, curry leaves, and spices.",
        "image": "https://example.com/images/curd_rice.jpg",
        "price": "₹35"
    },
    {
        "name": "Pesarattu Upma",
        "description": "A combination of green gram crepes and savory upma.",
        "image": "https://example.com/images/pesarattu_upma.jpg",
        "price": "₹60"
    },
    {
        "name": "Mysore Pak",
        "description": "A rich, sweet dessert made from gram flour, sugar, and ghee.",
        "image": "https://example.com/images/mysore_pak.jpg",
        "price": "₹55"
    },
    {
        "name": "Ragi Mudde",
        "description": "Finger millet balls typically served with sambar or curry.",
        "image": "https://example.com/images/ragi_mudde.jpg",
        "price": "₹50"
    },
    {
        "name": "Kadala Curry",
        "description": "A spicy chickpea curry often served with idiyappam or puttu.",
        "image": "https://example.com/images/kadala_curry.jpg",
        "price": "₹45"
    },
    {
        "name": "Idiyappam",
        "description": "Steamed rice noodles often served with curry or milk.",
        "image": "https://example.com/images/idiyappam.jpg",
        "price": "₹40"
    },
    {
        "name": "Puttu",
        "description": "Steamed rice cakes made with coconut and rice flour.",
        "image": "https://example.com/images/puttu.jpg",
        "price": "₹45"
    },
    {
        "name": "Coriander Rice",
        "description": "Rice cooked with coriander leaves and spices.",
        "image": "https://example.com/images/coriander_rice.jpg",
        "price": "₹50"
    },
    {
        "name": "Pulka",
        "description": "Thin, unleavened flatbreads often served with vegetables or curry.",
        "image": "https://example.com/images/pulka.jpg",
        "price": "₹20"
    },
    {
        "name": "Chettinad Vada",
        "description": "Spicy, deep-fried vada with a Chettinad twist.",
        "image": "https://example.com/images/chettinad_vada.jpg",
        "price": "₹35"
    },
    {
        "name": "Rawa Idli",
        "description": "Idli made from semolina instead of rice flour.",
        "image": "https://example.com/images/rawa_idli.jpg",
        "price": "₹35"
    },
    {
        "name": "Venn Pongal",
        "description": "A savory porridge made with rice and moong dal, seasoned with spices.",
        "image": "https://example.com/images/venn_pongal.jpg",
        "price": "₹40"
    },
    {
        "name": "Aloo Bonda",
        "description": "Spicy mashed potato balls coated in gram flour and deep-fried.",
        "image": "https://example.com/images/aloo_bonda.jpg",
        "price": "₹30"
    },
    {
        "name": "Karam Dosa",
        "description": "Spicy dosa made with chili and other spices.",
        "image": "https://example.com/images/karam_dosa.jpg",
        "price": "₹55"
    },
    {
        "name": "Kothu Kothu",
        "description": "A spicy, shredded parotta dish with vegetables or meat.",
        "image": "https://example.com/images/kothu_kothu.jpg",
        "price": "₹70"
    },
    {
        "name": "Chana Sundal",
        "description": "A spiced chickpea salad typically made with coconut and curry leaves.",
        "image": "https://example.com/images/chana_sundal.jpg",
        "price": "80"
    }
]

const curries=[
    {
        "name": "Gongura Pachadi",
        "description": "A tangy chutney made from gongura leaves, often served with rice.",
        "image": "https://example.com/images/gongura_pachadi.jpg",
        "price": "₹80"
    },
    {
        "name": "Royyala Vepudu",
        "description": "A spicy and flavorful shrimp curry made with a variety of spices.",
        "image": "https://example.com/images/royyala_vepudu.jpg",
        "price": "₹150"
    },
    {
        "name": "Pulusu",
        "description": "A tamarind-based curry with vegetables, often made with okra or eggplant.",
        "image": "https://example.com/images/pulusu.jpg",
        "price": "₹70"
    },
    {
        "name": "Pesarattu",
        "description": "Green gram curry or pancake often enjoyed with chutney.",
        "image": "https://example.com/images/pesarattu.jpg",
        "price": "₹60"
    },
    {
        "name": "Andhra Chicken Curry",
        "description": "A spicy chicken curry with Andhra-style spices and flavors.",
        "image": "https://example.com/images/andhra_chicken_curry.jpg",
        "price": "₹120"
    },
    {
        "name": "Mutton Kheema",
        "description": "Minced mutton cooked with spices and herbs.",
        "image": "https://example.com/images/mutton_kheema.jpg",
        "price": "₹140"
    },
    {
        "name": "Brinjal Curry",
        "description": "A spicy curry made with eggplant, often cooked with tamarind and spices.",
        "image": "https://example.com/images/brinjal_curry.jpg",
        "price": "₹75"
    },
    {
        "name": "Biryani",
        "description": "A fragrant rice dish with spices, typically cooked with vegetables or meat.",
        "image": "https://example.com/images/biryani.jpg",
        "price": "₹100"
    },
    {
        "name": "Aloo Gadda Curry",
        "description": "A spicy curry made with potatoes and Andhra-style spices.",
        "image": "https://example.com/images/aloo_gadda_curry.jpg",
        "price": "₹65"
    },
    {
        "name": "Gongura Mutton Curry",
        "description": "Mutton curry cooked with tangy gongura leaves.",
        "image": "https://example.com/images/gongura_mutton_curry.jpg",
        "price": "₹140"
    },
    {
        "name": "Mamidikaya Pappu",
        "description": "A spicy and tangy lentil curry made with raw mangoes.",
        "image": "https://example.com/images/mamidikaya_pappu.jpg",
        "price": "₹70"
    },
    {
        "name": "Kura",
        "description": "A traditional curry made with vegetables or meat and seasoned with spices.",
        "image": "https://example.com/images/kura.jpg",
        "price": "₹75"
    },
    {
        "name": "Bhindi Curry",
        "description": "A spicy curry made with okra and Andhra-style spices.",
        "image": "https://example.com/images/bhindi_curry.jpg",
        "price": "₹70"
    },
    {
        "name": "Chicken Korma",
        "description": "A rich, creamy chicken curry with yogurt and spices.",
        "image": "https://example.com/images/chicken_korma.jpg",
        "price": "₹130"
    },
    {
        "name": "Kongura Mutton Curry",
        "description": "Mutton curry cooked with kongura (sorrel leaves), giving it a unique tangy flavor.",
        "image": "https://example.com/images/kongura_mutton_curry.jpg",
        "price": "₹140"
    },
    {
        "name": "Pappu Charu",
        "description": "A tangy and spicy lentil soup, often made with tamarind.",
        "image": "https://example.com/images/pappu_charu.jpg",
        "price": "₹60"
    },
    {
        "name": "Telangana Mutton Curry",
        "description": "A robust mutton curry with Telangana-style spices and flavors.",
        "image": "https://example.com/images/telangana_mutton_curry.jpg",
        "price": "₹150"
    },
    {
        "name": "Chana Dal Curry",
        "description": "A hearty curry made with chana dal (split chickpeas) and spices.",
        "image": "https://example.com/images/chana_dal_curry.jpg",
        "price": "₹65"
    },
    {
        "name": "Bendakaya Vepudu",
        "description": "Spicy fried okra, often served as a side dish.",
        "image": "https://example.com/images/bendakaya_vepudu.jpg",
        "price": "₹70"
    },
    {
        "name": "Kothimeera Kura",
        "description": "A flavorful curry made with cilantro and spices.",
        "image": "https://example.com/images/kothimeera_kura.jpg",
        "price": "₹75"
    },
    {
        "name": "Tamatar Curry",
        "description": "A tangy and spicy tomato-based curry.",
        "image": "https://example.com/images/tamatar_curry.jpg",
        "price": "₹60"
    },
    {
        "name": "Vankaya Curry",
        "description": "A rich and spicy eggplant curry.",
        "image": "https://example.com/images/vankaya_curry.jpg",
        "price": "₹70"
    },
    {
        "name": "Egg Curry",
        "description": "A spicy curry made with boiled eggs.",
        "image": "https://example.com/images/egg_curry.jpg",
        "price": "₹80"
    },
    {
        "name": "Sena Kura",
        "description": "A curry made with fenugreek leaves, spiced with traditional Andhra flavors.",
        "image": "https://example.com/images/sena_kura.jpg",
        "price": "₹75"
    },
    {
        "name": "Bhindi Masala",
        "description": "A spicy and savory okra curry.",
        "image": "https://example.com/images/bhindi_masala.jpg",
        "price": "₹70"
    },
    {
        "name": "Gutti Vankaya",
        "description": "Stuffed eggplant curry with a spiced filling.",
        "image": "https://example.com/images/gutti_vankaya.jpg",
        "price": "₹80"
    },
    {
        "name": "Masala Kofta",
        "description": "Deep-fried vegetable balls in a spiced gravy.",
        "image": "https://example.com/images/masala_kofta.jpg",
        "price": "₹90"
    },
    {
        "name": "Chicken Fry",
        "description": "Spicy, crispy fried chicken pieces.",
        "image": "https://example.com/images/chicken_fry.jpg",
        "price": "₹120"
    },
    {
        "name": "Pappu Allam",
        "description": "A spicy lentil curry with ginger and spices.",
        "image": "https://example.com/images/pappu_allam.jpg",
        "price": "₹65"
    },
    {
        "name": "Eggplant Masala",
        "description": "A spicy curry made with eggplant and traditional spices.",
        "image": "https://example.com/images/eggplant_masala.jpg",
        "price": "₹75"
    },
    {
        "name": "Mutton Fry",
        "description": "Spicy, dry-fried mutton pieces with spices.",
        "image": "https://example.com/images/mutton_fry.jpg",
        "price": "₹140"
    },
    {
        "name": "Chappal Subzi",
        "description": "A spicy curry made with fish pieces and spices.",
        "image": "https://example.com/images/chappal_subzi.jpg",
        "price": "₹130"
    },
    {
        "name": "Methi Malai",
        "description": "A rich and creamy curry made with fenugreek leaves and cream.",
        "image": "https://example.com/images/methi_malai.jpg",
        "price": "₹90"
    },
    {
        "name": "Pindi Chana",
        "description": "A spicy chickpea curry with a robust flavor.",
        "image": "https://example.com/images/pindi_chana.jpg",
        "price": "₹80"
    },
    {
        "name": "Pesarattu",
        "description": "Green gram curry or pancake often enjoyed with chutney.",
        "image": "https://example.com/images/pesarattu.jpg",
        "price": "₹60"
    },
    {
        "name": "Kobari Curry",
        "description": "A coconut-based curry with a rich flavor.",
        "image": "https://example.com/images/kobari_curry.jpg",
        "price": "₹60"
    }
]

const biryani=[
    {
        "name": "Hyderabadi Biryani",
        "description": "A fragrant rice dish with marinated meat and aromatic spices, slow-cooked to perfection.",
        "image": "https://example.com/images/hyderabadi_biryani.jpg",
        "price": "₹150"
    },
    {
        "name": "Kacchi Biryani",
        "description": "Marinated meat cooked with rice and spices, layered and slow-cooked for a rich flavor.",
        "image": "https://example.com/images/kacchi_biryani.jpg",
        "price": "₹160"
    },
    {
        "name": "Shahjahani Biryani",
        "description": "A royal biryani with a rich blend of spices, meat, and saffron.",
        "image": "https://example.com/images/shahjahani_biryani.jpg",
        "price": "₹170"
    },
    {
        "name": "Ambur Biryani",
        "description": "A spicy and flavorful biryani made with short-grain rice and succulent pieces of meat.",
        "image": "https://example.com/images/ambur_biryani.jpg",
        "price": "₹140"
    },
    {
        "name": "Dindigul Biryani",
        "description": "A unique biryani with a distinctive flavor from Dindigul, known for its spicy and tangy taste.",
        "image": "https://example.com/images/dindigul_biryani.jpg",
        "price": "₹150"
    },
    {
        "name": "Chennai Biryani",
        "description": "A spicy biryani with a mix of aromatic spices, tender meat, and flavorful rice.",
        "image": "https://example.com/images/chennai_biryani.jpg",
        "price": "₹140"
    },
    {
        "name": "Bangalore Biryani",
        "description": "A mild and fragrant biryani with a subtle blend of spices and tender meat.",
        "image": "https://example.com/images/bangalore_biryani.jpg",
        "price": "₹130"
    },
    {
        "name": "Thalassery Biryani",
        "description": "A Kerala-style biryani with a blend of spices, crispy fried onions, and tender meat.",
        "image": "https://example.com/images/thalassery_biryani.jpg",
        "price": "₹150"
    },
    {
        "name": "Kalyani Biryani",
        "description": "A flavorful biryani from the Kalyani region, known for its spicy and aromatic taste.",
        "image": "https://example.com/images/kalyani_biryani.jpg",
        "price": "₹160"
    },
    {
        "name": "Nawabi Biryani",
        "description": "A rich and aromatic biryani with a blend of royal spices and tender meat.",
        "image": "https://example.com/images/nawabi_biryani.jpg",
        "price": "₹170"
    },
    {
        "name": "Guntur Biryani",
        "description": "A spicy biryani from Guntur with a robust flavor and a generous amount of red chili.",
        "image": "https://example.com/images/guntur_biryani.jpg",
        "price": "₹140"
    },
    {
        "name": "Kottayam Biryani",
        "description": "A biryani from Kottayam with a unique blend of spices and aromatic rice.",
        "image": "https://example.com/images/kottayam_biryani.jpg",
        "price": "₹150"
    },
    {
        "name": "Mangalore Biryani",
        "description": "A biryani with a spicy and tangy flavor, popular in Mangalore.",
        "image": "https://example.com/images/mangalore_biryani.jpg",
        "price": "₹140"
    },
    {
        "name": "Sambhar Biryani",
        "description": "A biryani with a tangy and spicy twist, incorporating traditional sambar flavors.",
        "image": "https://example.com/images/sambhar_biryani.jpg",
        "price": "₹150"
    },
    {
        "name": "Rava Biryani",
        "description": "A unique biryani made with rava (semolina) instead of rice, with a blend of spices and vegetables.",
        "image": "https://example.com/images/rava_biryani.jpg",
        "price": "₹120"
    },
    {
        "name": "Mutton Biryani",
        "description": "A rich and flavorful biryani made with succulent pieces of mutton.",
        "image": "https://example.com/images/mutton_biryani.jpg",
        "price": "₹160"
    },
    {
        "name": "Vegetable Biryani",
        "description": "A hearty biryani made with mixed vegetables and aromatic spices.",
        "image": "https://example.com/images/vegetable_biryani.jpg",
        "price": "₹130"
    },
    {
        "name": "Hyderabadi Dum Biryani",
        "description": "A traditional Hyderabadi biryani slow-cooked with a rich blend of spices and meat.",
        "image": "https://example.com/images/hyderabadi_dum_biryani.jpg",
        "price": "₹160"
    },
    {
        "name": "Andhra Biryani",
        "description": "A spicy and flavorful biryani from Andhra Pradesh with a mix of spices and tender meat.",
        "image": "https://example.com/images/andhra_biryani.jpg",
        "price": "₹150"
    },
    {
        "name": "Telangana Biryani",
        "description": "A biryani from Telangana known for its spicy and robust flavors.",
        "image": "https://example.com/images/telangana_biryani.jpg",
        "price": "₹160"
    },
    {
        "name": "Kollam Biryani",
        "description": "A spicy biryani from Kollam with a rich blend of spices and tender meat.",
        "image": "https://example.com/images/kollam_biryani.jpg",
        "price": "₹150"
    },
    {
        "name": "Alleppey Biryani",
        "description": "A fragrant biryani from Alleppey with a unique blend of spices and tender meat.",
        "image": "https://example.com/images/alleppey_biryani.jpg",
        "price": "₹140"
    },
    {
        "name": "Kadambam Biryani",
        "description": "A flavorful biryani with a mix of spices, meat, and rice, slow-cooked for a rich taste.",
        "image": "https://example.com/images/kadambam_biryani.jpg",
        "price": "₹160"
    },
    {
        "name": "Mutton Sholay Biryani",
        "description": "A rich and spicy biryani made with tender mutton and aromatic spices.",
        "image": "https://example.com/images/mutton_sholay_biryani.jpg",
        "price": "₹170"
    },
    {
        "name": "Chicken Hyderabadi Biryani",
        "description": "A flavorful biryani made with marinated chicken, slow-cooked with spices and rice.",
        "image": "https://example.com/images/chicken_hyderabadi_biryani.jpg",
        "price": "₹150"
    },
    {
        "name": "Kacchi Mutton Biryani",
        "description": "Mutton biryani where the meat is marinated and cooked with rice in a sealed pot.",
        "image": "https://example.com/images/kacchi_mutton_biryani.jpg",
        "price": "₹160"
    },
    {
        "name": "Chennai Mutton Biryani",
        "description": "A spicy and aromatic biryani made with mutton and a blend of Chennai-style spices.",
        "image": "https://example.com/images/chennai_mutton_biryani.jpg",
        "price": "₹160"
    },
    {
        "name": "Ambur Mutton Biryani",
        "description": "A spicy biryani with a distinctive flavor from Ambur, made with mutton and rice.",
        "image": "https://example.com/images/ambur_mutton_biryani.jpg",
        "price": "₹150"
    },
    {
        "name": "Guntur Chicken Biryani",
        "description": "A spicy chicken biryani from Guntur with a robust flavor and generous use of red chili.",
        "image": "https://example.com/images/guntur_chicken_biryani.jpg",
        "price": "₹150"
    },
    {
        "name": "Telangana Mutton Biryani",
        "description": "A flavorful mutton biryani from Telangana, known for its spicy and rich taste.",
        "image": "https://example.com/images/telangana_mutton_biryani.jpg",
        "price": "₹160"
    },
    {
        "name": "Kollam Mutton Biryani",
        "description": "A traditional biryani from Koll Kollam with mutton, rice, and a blend of spices.",
        "image": "https://example.com/images/kollam_mutton_biryani.jpg",
        "price": "₹150"
    }
]

const div=document.getElementById('main')
function clearContent() {
    div.innerHTML = ''; 
}
function tiffin(){
    clearContent()
    tiffins.forEach((val)=>{
        const newDiv=document.createElement('div')
        newDiv.classList.add('contents')
        const image=document.createElement('img')
        image.src=val.image
        image.height='200'
        const name=document.createElement('h1')
        name.innerHTML=val.name
        const des=document.createElement('p')
        des.textContent=val.description
        const pr=document.createElement('p')
        pr.innerHTML='<b>Price: </b>' +val.price
        newDiv.append(image,name,des,pr)
        div.appendChild(newDiv)
    })
    
}

function curry(){
    clearContent()
    curries.forEach((val)=>{
        const newDiv=document.createElement('div')
        newDiv.classList.add('contents')
        const image=document.createElement('img')
        image.src=val.image
        image.height='200'
        const name=document.createElement('h1')
        name.textContent=val.name
        const des=document.createElement('p')
        des.textContent=val.description
        const pr=document.createElement('p')
        pr.innerHTML='<b>Price: </b>' +val.price
        newDiv.append(image,name,des,pr)
        div.appendChild(newDiv)
    })
    
}

function biryanies(){
    clearContent()
    biryani.forEach((val)=>{
        const newDiv=document.createElement('div')
        newDiv.classList.add('contents')
        const image=document.createElement('img')
        image.src=val.image
        image.height='200'
        const name=document.createElement('h1')
        name.textContent=val.name
        const des=document.createElement('p')
        des.textContent=val.description
        const pr=document.createElement('p')
        pr.innerHTML='<b>Price: </b>' +val.price
        newDiv.append(image,name,des,pr)
        div.appendChild(newDiv)
    })
}

document.getElementById('btn1').addEventListener('click',tiffin);
document.getElementById('btn2').addEventListener('click',curry);
document.getElementById('btn3').addEventListener('click',biryanies);

const input=document.getElementById('inp');
input.addEventListener('keypress',(e)=>{
    const search=e.target.value.toUpperCase();
    const item=document.querySelectorAll('.contents');
    const l=document.getElementsByTagName('h1')
    for(i=0;i<l.length;i++){
        const a=item[i].getElementsByTagName('h1')[0];
        const val=a.innerText||a.innerHTML||a.textContent;
        if(val.toUpperCase().indexOf(search)>-1)
            item[i].style.display='';
        else
            item[i].style.display='';
    }

})