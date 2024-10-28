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


/*

    PAGINAS DOS JOGOS ************************************************************

*/

app.get("/games/GTA%20V.html", (req, res) => {
    fs.readFile(path.join(__dirname, 'games/GTA5.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('text/html').send(data);
        }
    })
})

app.get('/')

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

app.get('/jogos_img/', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('/image').send(data);
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

app.get('/jogos_img/', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('/image').send(data);
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

app.get('/jogos_img/Capa_Super_Mario_Bros_Wonder.jpeg', (req, res) => {
    fs.readFile(path.join(__dirname, 'jogos_img/Capa_Super_Mario_Bros_Wonder.jpeg'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro interno do servidor!");
        } else {
            res.status(200).contentType('jpeg/image').send(data);
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

    CONFIGURAÇÂOES DO SERVIDOR ******************************************************

*/

const port = 1115;
// Essa tem que ser a ultima linha de código a ser executada!
app.listen(port, ()=> {
    console.log(`Servidor iniciado: http://localhost:${port}`);
});