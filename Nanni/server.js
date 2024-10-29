// Fazer a importação dos modulos necessarios:
const express = require('express');
const fs = require('fs');
const path = require('path');

// Criar o server:
const app = express();


/*

    ESPECIFICANDO ROTAS, LOCAL DE IMAGENS E ARQUIVOS NECESSARIOS *****************

*/

//INDEX
app.get('/', (req, res) => {
    res.status(200).contentType('text/html').sendFile(__dirname + '/index.html');
});

//HEADER
app.get("/Header.html", (req, res) => {
    fs.readFile(path.join(__dirname, 'Header.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!")
        } else {
            res.status(200).send(data)
        }
    });
})

//FOOTER
app.get("/Footer.html", (req, res)=> {
    fs.readFile(path.join(__dirname, 'Footer.html'), (err,data)=>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).send(data);
        }
    });
});

//LISTA DE DESEJOS
app.get("/ListadeDesejos.html", (req, res)=> {
    fs.readFile(path.join(__dirname, 'ListadeDesejos.html'), (err,data)=>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    });
});

//LOGIN
app.get("/login.html", (req, res) => {
    fs.readFile(path.join(__dirname, 'login.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

//CARRINHO
app.get("/Carrinho.html", (req, res) => {
    fs.readFile(path.join(__dirname, 'Carrinho.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
})

app.get('/PS4.html', (req, res) => {
    fs.readFile(path.join(__dirname, 'PS4.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    });
});

app.get('/PS5.html', (req, res) => {
    fs.readFile(path.join(__dirname, 'PS5.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    });
});

app.get('/XboxOne.html', (req, res) => {
    fs.readFile(path.join(__dirname, 'XboxOne.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    });
});

app.get('/XboxSeries.html', (req, res) => {
    fs.readFile(path.join(__dirname, 'XboxSeries.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    });
});

app.get('/NintendoSwitch.html', (req, res) => {
    fs.readFile(path.join(__dirname, 'NintendoSwitch.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    });
});


/*

    PAGINAS DOS JOGOS ************************************************************

*/

app.get('/Games/GTA5.html', (req, res)=>{
    fs.readFile(path.join(__dirname, 'Games/GTA5.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

app.get('/Games/EA_SPORTS_FC_24.html', (req, res)=>{
    fs.readFile(path.join(__dirname, 'Games/EA_SPORTS_FC_24.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

app.get('/Games/Halo_Infinite.html', (req, res)=>{
    fs.readFile(path.join(__dirname, 'Games/Halo_Infinite.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

app.get('/Games/God_of_War.html', (req, res)=>{
    fs.readFile(path.join(__dirname, 'Games/God_of_War.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

app.get('/Games/The_Last_of_Us_Part_II.html', (req, res)=>{
    fs.readFile(path.join(__dirname, 'Games/The_Last_of_Us_Part_II.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

app.get('/Games/Red_Dead_Redemption_II.html', (req, res)=>{
    fs.readFile(path.join(__dirname, 'Games/Red_Dead_Redemption_II.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

app.get('/Games/Halo_5_Guardians.html', (req, res)=>{
    fs.readFile(path.join(__dirname, 'Games/Halo_5_Guardians.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

app.get('/Games/Forza_Horizon_4.html', (req, res)=>{
    fs.readFile(path.join(__dirname, 'Games/Forza_Horizon_4.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

app.get('/Games/Gears_5_Xbox_One.html', (req, res)=>{
    fs.readFile(path.join(__dirname, 'Games/Gears_5_Xbox_One.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

app.get('/Games/Sea_of_Thieves.html', (req, res)=>{
    fs.readFile(path.join(__dirname, 'Games/Sea_of_Thieves.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

app.get('/Games/Zelda_Breath_of_the_Wild.html', (req, res)=>{
    fs.readFile(path.join(__dirname, 'Games/Zelda_Breath_of_the_Wild.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

app.get('/Games/Animal_Crossing_New_Horizons.html', (req, res)=>{
    fs.readFile(path.join(__dirname, 'Games/Animal_Crossing_New_Horizons.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

app.get('/Games/Mario_Kart_8_Deluxe.html', (req, res)=>{
    fs.readFile(path.join(__dirname, '/Games/Mario_Kart_8_Deluxe.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

app.get('/Games/Super_Smash_Bros_Ultimate.html', (req, res)=>{
    fs.readFile(path.join(__dirname, '/Games/Super_Smash_Bros_Ultimate.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

app.get('/Games/Spider_Man_Miles_Morales.html', (req, res)=>{
    fs.readFile(path.join(__dirname, '/Games/Spider_Man_Miles_Morales.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

app.get('/Games/Demons_Souls.html', (req, res)=>{
    fs.readFile(path.join(__dirname, '/Games/Demons_Souls.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

app.get('/Games/Returnal.html', (req, res)=>{
    fs.readFile(path.join(__dirname, '/Games/Returnal.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

app.get('/Games/Ratchet_&_Clank_Rift_Apart.html', (req, res)=>{
    fs.readFile(path.join(__dirname, '/Games/Ratchet_&_Clank_Rift_Apart.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

app.get('/Games/Forza_Horizon_5.html', (req, res)=>{
    fs.readFile(path.join(__dirname, '/Games/Forza_Horizon_5.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

app.get("/Games/Gears_5_Xbox_Series.html", (req, res) => {
    fs.readFile(path.join(__dirname, '/Games/Gears_5_Xbox_Series.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
})

app.get('/Games/Microsoft_Flight_Simulator.html', (req, res) =>{
    fs.readFile(path.join(__dirname, '/Games/Microsoft_Flight_Simulator.html'), (err, data)=>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

/*

    IMAGENS ICONES ************************************************************

*/

app.get('/img_icones/logo_nanni.png', (req, res) => {
    fs.readFile(path.join(__dirname, 'img_icones/logo_nanni.png'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

app.get('/img_icones/carrinho_branco.png', (req, res) => {
    fs.readFile(path.join(__dirname, 'img_icones/carrinho_branco.png'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

app.get('/img_icones/lista_de_desejos_branco.png', (req, res) => {
    fs.readFile(path.join(__dirname, 'img_icones/lista_de_desejos_branco.png'), (err, data) =>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

app.get('/img_icones/lista_desejos.png', (req, res) => {
    fs.readFile(path.join(__dirname, 'img_icones/lista_desejos.png'), (err, data) =>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

app.get('/img_icones/icone_lixeira.png', (req, res) => {
    fs.readFile(path.join(__dirname, 'img_icones/icone_lixeira.png'), (err, data) =>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});

app.get('/img_icones/icone_carrinho.png', (req, res) => {
    fs.readFile(path.join(__dirname, 'img_icones/icone_carrinho.png'), (err, data) =>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
});


/* 

    IMAGENS CARROSEL - INDEX ******************************************************

*/

app.get('/img_carrosel/2-tlou.png', (req, res) => {
    fs.readFile(path.join(__dirname, 'img_carrosel/2-tlou.png'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('png/image').send(data);
        }
    })
});

app.get('/img_carrosel/gow-ragnarok.png', (req, res) => {
    fs.readFile(path.join(__dirname, 'img_carrosel/gow-ragnarok.png'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('png/image').send(data);
        }
    })
});

app.get('/img_carrosel/spider-man-2-ps5-banner2.png', (req, res) => {
    fs.readFile(path.join(__dirname, 'img_carrosel/spider-man-2-ps5-banner2.png'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('png/image').send(data);
        }
    })
});

/*

    IMAGENS CAPAS DOS JOGOS - INDEX ***********************************************

*/

app.get('/jogos_img/Capa_Animal_Crossing_New_Horizons.jpg', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/Capa_Animal_Crossing_New_Horizons.jpg'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

app.get('/jogos_img/Capa_Demons_Souls.jpg', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/Capa_Demons_Souls.jpg'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

app.get('/jogos_img/Capa_FC24.png', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/Capa_FC24.png'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('png/image').send(data);
        }
    });
});

app.get('/jogos_img/Capa_ForzaHorizon_4.jpg', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/Capa_ForzaHorizon_4.jpg'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

app.get('/jogos_img/Capa_ForzaHorizon_5.jpg', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/Capa_ForzaHorizon_5.jpg'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

app.get('/jogos_img/Capa_Gears_5.jpg', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/Capa_Gears_5.jpg'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

app.get('/jogos_img/Capa_Gears_5_XboxOne.jpg', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/Capa_Gears_5_XboxOne.jpg'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

app.get('/jogos_img/Capa_God_of_War.jpeg', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/Capa_God_of_War.jpeg'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpeg/image').send(data);
        }
    });
});

app.get('/jogos_img/Capa_GTA-V_PS4.jpeg', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/Capa_GTA-V_PS4.jpeg'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpeg/image').send(data);
        }
    });
});

app.get('/jogos_img/Capa_Halo_5_Guardians.jpeg', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/Capa_Halo_5_Guardians.jpeg'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpeg/image').send(data);
        }
    });
});

app.get('/jogos_img/Capa_HaloInfinite.jpeg', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/Capa_HaloInfinite.jpeg'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpeg/image').send(data);
        }
    });
});

app.get('/jogos_img/Capa_MarioKart_8_Deluxe.jpg', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/Capa_MarioKart_8_Deluxe.jpg'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

app.get('/jogos_img/Capa_Microsoft_Flight_Simulator.jpg', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/Capa_Microsoft_Flight_Simulator.jpg'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

app.get('/jogos_img/Capa_Ratchet_&_clank_rift_apart.jpg', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/Capa_Ratchet_&_clank_rift_apart.jpg'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

app.get('/jogos_img/Capa_Red_Dead_Redemption_II.jpeg', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/Capa_Red_Dead_Redemption_II.jpeg'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpeg/image').send(data);
        }
    });
});

app.get('/jogos_img/Capa_Returnal.jpg', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/Capa_Returnal.jpg'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

app.get('/jogos_img/Capa_Sea_of_Thieves.jpeg', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/Capa_Sea_of_Thieves.jpeg'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpeg/image').send(data);
        }
    });
});

app.get('/jogos_img/Capa_Spiderman_Miles_Morales.jpg', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/Capa_Spiderman_Miles_Morales.jpg'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

app.get('/jogos_img/Capa_Super_Smash_Bros_Ultimate.jpeg', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/Capa_Super_Smash_Bros_Ultimate.jpeg'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpeg/image').send(data);
        }
    });
});

app.get('/jogos_img/Capa_Super_Smash_Bros_Ultimate.jpg', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/Capa_Super_Smash_Bros_Ultimate.jpg'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

app.get('/jogos_img/Capa_The_Last_of_Us_Part_II.jpeg', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/Capa_The_Last_of_Us_Part_II.jpeg'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpeg/image').send(data);
        }
    });
});

app.get('/jogos_img/Capa_Zelda_Breath_of_the_Wild.jpeg', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/Capa_Zelda_Breath_of_the_Wild.jpeg'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpeg/image').send(data);
        }
    });
});

app.get('/jogos_img/Capa_Zelda_Breath_of_the_Wild.jpg', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/Capa_Zelda_Breath_of_the_Wild.jpg'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

/*

    IMAGENS BANNERS

*/

app.get('/banners/Banner_Animal_Crossing.jpg', (req, res)=>{
    fs.readFile(path.join(__dirname, '/banners/Banner_Animal_Crossing.jpg'), (err, data)=>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});


app.get('/banners/Banner_Demon_Souls.webp', (req, res)=>{
    fs.readFile(path.join(__dirname, '/banners/Banner_Demon_Souls.webp'), (err, data)=>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).send(data);
        }
    });
});

app.get('/banners/Banner_EA_SPORTSFC24.jpg', (req, res)=>{
    fs.readFile(path.join(__dirname, '/banners/Banner_EA_SPORTSFC24.jpg'), (err, data)=>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

app.get('/banners/Banner_Flight_Simulator.jpg', (req, res)=>{
    fs.readFile(path.join(__dirname, '/banners/Banner_Flight_Simulator.jpg'), (err, data)=>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

app.get('/banners/Banner_Forza_4.jpg', (req, res)=>{
    fs.readFile(path.join(__dirname, '/banners/Banner_Forza_4.jpg'), (err, data)=>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

app.get('/banners/Banner_Forza_5.png', (req, res)=>{
    fs.readFile(path.join(__dirname, '/banners/Banner_Forza_5.png'), (err, data)=>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

app.get('/banners/Banner_Gears_5_xone.png', (req, res)=>{
    fs.readFile(path.join(__dirname, '/banners/Banner_Gears_5_xone.png'), (err, data)=>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

app.get('/banners/Banner_Gears_5_xseries.png', (req, res)=>{
    fs.readFile(path.join(__dirname, '/banners/Banner_Gears_5_xseries.png'), (err, data)=>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

app.get('/banners/Banner_GTAV.png', (req, res)=>{
    fs.readFile(path.join(__dirname, '/banners/Banner_GTAV.png'), (err, data)=>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

app.get('/banners/Banner_Halo_5_Guardians.jpg', (req, res)=>{
    fs.readFile(path.join(__dirname, '/banners/Banner_Halo_5_Guardians.jpg'), (err, data)=>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

app.get('/banners/Banner_Halo_infinite.jpg', (req, res)=>{
    fs.readFile(path.join(__dirname, '/banners/Banner_Halo_infinite.jpg'), (err, data)=>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

app.get('/banners/Banner_Mario_kart.jpg', (req, res)=>{
    fs.readFile(path.join(__dirname, '/banners/Banner_Mario_kart.jpg'), (err, data)=>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

app.get('/banners/Banner_Miles_Morales.jpg', (req, res)=>{
    fs.readFile(path.join(__dirname, '/banners/Banner_Miles_Morales.jpg'), (err, data)=>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

app.get('/banners/Banner_Ratchet_and_Clank.webp', (req, res)=>{
    fs.readFile(path.join(__dirname, '/banners/Banner_Ratchet_and_Clank.webp'), (err, data)=>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).send(data);
        }
    });
});

app.get('/banners/Banner_RDRII.webp', (req, res)=>{
    fs.readFile(path.join(__dirname, '/banners/Banner_RDRII.webp'), (err, data)=>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).send(data);
        }
    });
});

app.get('/banners/Banner_Returnal.webp', (req, res)=>{
    fs.readFile(path.join(__dirname, '/banners/Banner_Returnal.webp'), (err, data)=>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).send(data);
        }
    });
});

app.get('/banners/Banner_Sea_of_Thieves.png', (req, res)=>{
    fs.readFile(path.join(__dirname, '/banners/Banner_Sea_of_Thieves.png'), (err, data)=>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

app.get('/banners/Banner_super_smash_bros.webp', (req, res)=>{
    fs.readFile(path.join(__dirname, '/banners/Banner_super_smash_bros.webp'), (err, data)=>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).send(data);
        }
    });
});


app.get('/banners/Banner_The_Last_Of_Us_part_2.webp', (req, res)=>{
    fs.readFile(path.join(__dirname, '/banners/Banner_The_Last_Of_Us_part_2.webp'), (err, data)=>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).send(data);
        }
    });
});

app.get('/banners/Banner_Zelda.jpeg', (req, res)=>{
    fs.readFile(path.join(__dirname, '/banners/Banner_Zelda.jpeg'), (err, data)=>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

app.get('/banners/God_of_War.png', (req, res)=>{
    fs.readFile(path.join(__dirname, '/banners/God_of_War.png'), (err, data)=>{
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpg/image').send(data);
        }
    });
});

/*

    CONFIGURAÇÂOES DO SERVIDOR ******************************************************

*/

const port = 1115;
// Essa tem que ser a ultima linha de código a ser executada!
app.listen(port, ()=> {
    console.log(`Servidor iniciado: http://localhost:${port}`);
});