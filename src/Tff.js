import React from "react";

import { Container } from "react-bulma-components/full";
import { Column } from "react-bulma-components/full";
import { Icon } from "react-bulma-components/full";

import "./App.css";

// Amblemler
var alanya = require("./images/alanya.png");
var ankara = require("./images/ankara.png");
var antalya = require("./images/antalya.png");
var basaksehir = require("./images/basaksehir.png");
var bjk = require("./images/bjk.png");
var denizli = require("./images/denizli.png");
var fb = require("./images/fb.png");
var gazisehir = require("./images/gazisehir.png");
var genclerbirligi = require("./images/genclerbirligi.png");
var goztepe = require("./images/goztepe.png");
var gs = require("./images/gs.png");
var kasımpasa = require("./images/kasımpasa.png");
var kayseri = require("./images/kayseri.png");
var konya = require("./images/konya.png");
var malatya = require("./images/malatya.png");
var rize = require("./images/rize.png");
var sivas = require("./images/sivas.png");
var ts = require("./images/ts.png");

function Tff() {
  return (
    <div className="container" id="teams">
      <section class="section has-background-light">
        <div class="container">
          {/* ilk üçlü */}
          <div class="columns">
            {/* 1. Takım */}

            <div class="column"  >
              <article class="media notification " id="alanya">
                <figure class="media-left">
                  <span class="icon is-large">
                    <figure class="image center">
                      <img src={alanya}  />
                    </figure>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4" >Alanyaspor </h1>
                    <p class="is-size-6">
                      Alanyaspor Antalya'nın Alanya ilçesindeki futbol
                      kulübüdür. Renkleri turuncu ve yeşildir. Maçlarını 10.842
                      kişilik Alanya Oba Stadyumu'nda oynamaktadır.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* 2.takım */}

            <div class="column">
              <article class="media notification " id="ankara">
                <figure class="media-left">
                  <span class="icon is-large">
                    <figure class="image center">
                      <img src={ankara} />
                    </figure>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4">Ankaragücü</h1>
                    <p class="is-size-6">
                      Ankaragücü 1910 yılında kurulmuştur. Maçlarını 22.000
                      kapasiteli Eryaman Stadyumu'nda oynamaktadır. Renkleri
                      sarı laciverttir.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* 3.takım */}

            <div class="column">
              <article class="media notification   " id="antalya">
                <figure class="media-left">
                  <span class="icon is-large">
                    <figure class="image center">
                      <img src={antalya} />
                    </figure>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4">Antalyaspor</h1>
                    <p class="is-size-6">
                      Antalyaspor futbol takımı, Antalyaspor'un 1966 yılında
                      kurulan ve Antalya'yı Süper Lig'de temsil eden futbol
                      takımıdır. Lakapları Akrep olan takımın renkleri, kırmızı
                      ve beyazdır.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* üçlü yapı sonn */}
          </div>

          {/* ikinci üçlü */}
          <div class="columns">
            {/* 4. Takım */}

            <div class="column">
              <article class="media notification   " id="basaksehir">
                <figure class="media-left">
                  <span class="icon is-large">
                    <figure class="image center">
                      <img src={basaksehir} />
                    </figure>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4">Basakşehir</h1>
                    <p class="is-size-6 " >
                      İstanbul Başakşehir Futbol Kulübü 1990 yılında
                      kurulmuştur. Maçlarını Başakşehir Fatih Terim Stadyumu'nda
                      oynamaktadır. Renkleri turuncu laciverttir.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* 5.takım */}

            <div class="column">
              <article class="media notification   " id="bjk">
                <figure class="media-left">
                  <span class="icon is-large">
                    <figure class="image center">
                      <img src={bjk} />
                    </figure>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4">Beşiktaş</h1>
                    <p class="is-size-6" >
                      Beşiktaş Jimnastik Kulübü, 1903 yılında İstanbul'da
                      kurulan spor kulübüdür. Maçlarını 41903 kişilik Vodafone
                      Park'ta oynamaktadır. Renkleri siyah beyazdır.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* 6.takım */}

            <div class="column">
              <article class="media notification   " id="denizli">
                <figure class="media-left">
                  <span class="icon is-large">
                    <figure class="image center">
                      <img src={denizli} />
                    </figure>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4">Denizlispor</h1>
                    <p class="is-size-6" >
                      Denizlispor, 1966 yılı Mayıs ayında Denizli ilinde
                      kurulmuştur. Maçlarını 15.500 kişilik Denizli Atatürk
                      Stadyumu'nda oynamaktadır. Renkleri yeşil-siyahdır.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* üçlü yapı sonn */}
          </div>

          {/* üçüncü üçlü */}
          <div class="columns">
            {/* 7. Takım */}

            <div class="column">
              <article class="media notification   " id="fb">
                <figure class="media-left">
                  <span class="icon is-large">
                    <figure class="image center">
                      <img src={fb} />
                    </figure>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4">Fenerbahçe</h1>
                    <p class="is-size-6" >
                      Fenerbahçe futbol takımı 1907 yılında kurulmuştur.
                      Maçlarını 47.834 kişilik Şükrü Saracoğlu Stadyumu'nda
                      oynamaktadır. Renkleri sarı laciverttir.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* 8.takım */}

            <div class="column">
              <article class="media notification   " id="gazisehir">
                <figure class="media-left">
                  <span class="icon is-large">
                    <figure class="image center">
                      <img src={gazisehir} />
                    </figure>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4">Gazişehir Gaziantep</h1>
                    <p class="is-size-6" >
                      Gazişehir Gaziantep 1988 yılında kurulmuştur. Maçlarını
                      16.821 kişilik Gaziantep Stadyumu'nda oynamaktadır.
                      Renkleri kırmızı siyahtır.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* 9.takım */}

            <div class="column">
              <article class="media notification   " id="genclerbirligi">
                <figure class="media-left">
                  <span class="icon is-large">
                    <figure class="image center">
                      <img src={genclerbirligi} />
                    </figure>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4">Gençlerbirliği</h1>
                    <p class="is-size-6" >
                      Gençlerbirliği 1923 yılında kurulmuştur. Maçlarını 22.000
                      kişilik Eryaman Stadyumu'nda oynamaktadır. Renkleri
                      kırmızı siyahtır.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* üçlü yapı sonn */}
          </div>

          {/* 4. üçlü */}
          <div class="columns">
            {/* 10. Takım */}

            <div class="column">
              <article class="media notification   " id="goztepe">
                <figure class="media-left">
                  <span class="icon is-large">
                    <figure class="image center">
                      <img src={goztepe} />
                    </figure>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4">Göztepe</h1>
                    <p class="is-size-6" >
                      Göztepe 1925 yılında İzmir'de kurulmuştur. Maçlarını
                      12.500 kişilik Bornova Stadyumu'nda oynamaktadır. Renkleri
                      sarı kırmızıdır.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* 11.takım */}

            <div class="column">
              <article class="media notification   " id="gs">
                <figure class="media-left">
                  <span class="icon is-large">
                    <figure class="image center">
                      <img src={gs} />
                    </figure>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4">Galatasaray</h1>
                    <p class="is-size-6" >
                      Galatasaray 1905 yılında kurulmuştur. Maçlarını 56.000
                      kişilik TT Arena'da oynamaktadır. Renkleri sarı
                      kırmızıdır.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* 12.takım */}

            <div class="column">
              <article class="media notification   " id="kasımpasa">
                <figure class="media-left">
                  <span class="icon is-large">
                    <figure class="image center">
                      <img src={kasımpasa} />
                    </figure>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4">Kasımpaşa</h1>
                    <p class="is-size-6" >
                      Galatasaray 1921 yılında kurulmuştur. Maçlarını 14.234
                      kişilik Recep Tayyip Erdoğan Stadı'nda oynamaktadır.
                      Renkleri mavi beyazdır.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* üçlü yapı sonn */}
          </div>

          {/* 5. üçlü */}
          <div class="columns">
            {/* 13. Takım */}

            <div class="column">
              <article class="media notification   " id="kayseri">
                <figure class="media-left">
                  <span class="icon is-large">
                    <figure class="image center">
                      <img src={kayseri} />
                    </figure>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4">Kayserispor</h1>
                    <p class="is-size-6" >
                      Kayserispor 1966 yılında kurulmuştur. Maçlarını 40.458
                      seyirci kapasiteli Kayseri Kadir Has Şehir Stadyumu'nda
                      oynamaktadır. Renkleri sarı kırmızıdır.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* 14.takım */}

            <div class="column">
              <article class="media notification   " id="konya">
                <figure class="media-left">
                  <span class="icon is-large">
                    <figure class="image center">
                      <img src={konya} />
                    </figure>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4">Konyaspor</h1>
                    <p class="is-size-6" >
                      Konyaspor 1922 yılında kurulmuştur. Maçlarını 42.981
                      seyirci kapasiteli Konya Büyükşehir Belediye Stadyumu'nda
                      oynamaktadır. Renkleri yeşil beyazdır.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* 15.takım */}

            <div class="column">
              <article class="media notification   " id="malatya">
                <figure class="media-left">
                  <span class="icon is-large">
                    <figure class="image center">
                      <img src={malatya} />
                    </figure>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4">Yeni Malatyaspor</h1>
                    <p class="is-size-6" >
                      Malatyaspor 1986 yılında kurulmuştur. Maçlarını 27.044
                      seyirci kapasiteli Yeni Malatya Stadyumu'nda oynamaktadır.
                      Renkleri sarı siyahtır.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* üçlü yapı sonn */}
          </div>

          {/* 6. üçlü */}
          <div class="columns">
            {/* 16. Takım */}

            <div class="column">
              <article class="media notification   " id="rize">
                <figure class="media-left">
                  <span class="icon is-large">
                    <figure class="image center">
                      <img src={rize} />
                    </figure>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4">Çaykur Rizespor</h1>
                    <p class="is-size-6" >
                      Çaykur Rizespor 1953 yılında kurulmuştur. Maçlarını 15.558
                      kişilik Çaykur Didi Stadyumu'nda oynamaktadır. Renkleri
                      mavi yeşildir.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* 17.takım */}

            <div class="column">
              <article class="media notification   " id="sivas">
                <figure class="media-left">
                  <span class="icon is-large">
                    <figure class="image center">
                      <img src={sivas} />
                    </figure>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4">Sivasspor</h1>
                    <p class="is-size-6" >
                      Sivasspor, 9 Mayıs 1967 tarihinde Sivas'ta kuruldu.
                      Maçlarını 27.532 kapasiteli Sivas 4 Eylül Stadyumu'nda
                      oynamaktadır. Renkleri kırmızı beyazdır.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* 18.takım */}

            <div class="column">
              <article class="media notification   " id="ts">
                <figure class="media-left">
                  <span class="icon is-large">
                    <figure class="image center">
                      <img src={ts} />
                    </figure>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4">Trabzonspor</h1>
                    <p class="is-size-6" >
                      Trabzonspor 1967 yılında kurulmuştur. Maçlarını 40.782
                      kapasiteli Medical Park Stadyumu'nda oynamaktadır.
                      Renkleri bordo mavidir.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* son */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tff;
