import React from "react";
import "./modules/_establishment.scss";

function Establishment() {
  return (
    <main role="main" className="vibhuti_sec">
      <div className="container">
        <div className="establishment_sec">
          <div className="row">
            <div className="col-md-4">
              <img
                src={require("../src/img/saibabas_pic.jpg")}
                alt="SRI SAIBABA"
                title="SRI SAIBABA"
                className="rounded img-fluid" width="500"
                height="500"
              />
            </div>
            <div className="col-md-8">
              <article>
                <h4 className="mb-3 mt-3 mt-md-0 mt-lg-0 mt-xl-0">Shri Sai Baba</h4>
                <p>
                  Shri Shirdi Sai baba appeared around 1838. He was a spiritual
                  master(Guru) who was well known across all Hindu and Muslim
                  communities. During his times, he gave important lessons about
                  forgiveness, love, gratitude, inner peace, devotion, helping
                  others, and many more. He taught why self-realization is very
                  important and why we shouldn't get too attached to things that
                  are perishable(e.g. flower). He encouraged Hindus to read the
                  Bhagavad Gita, Ramayan, Yoga Vasistha, and Muslims to study
                  the Qur'an. Sai Baba taught everyone regardless of religion.
                  His devotees, later on, became Saints and worked at temples
                  and masjids. Shirdi Sai Baba left his mortal body(took
                  Samadhi) on October 15, 1918. He was recognized as a role
                  model for peace, humanity, unity, and devotion.
                </p>
              </article>
            </div>
          </div>
          <hr className="block-divider" />
          <div className="row">
            <div className="col-md-4">
              <img
                src={require("../src/img/panta_maharaj_pic.jpg")}
                alt="SRI PANT MAHARAJ"
                title="SRI PANT MAHARAJ"
                className="rounded img-fluid"
              />
            </div>
            <div className="col-md-8">
              <article>
                <h4 className="mb-3 mt-3 mt-md-0 mt-lg-0 mt-xl-0">Shri Pant Maharaj</h4>
                <p>
                  Shri Pant Maharaj was born on September 3, 1855. He was born
                  on an auspicious Hindu holiday called Krishna Janmashtami or
                  Gokulashmi. At the various centers of the Sai Adhyatmic
                  Samiti, the devotional Hymns, composed by Shri Pant Maharaj of
                  Balekundri, (in Karnataka State), a celebrated Sidha Guru in
                  his lifetime, are sung and rendered with devotion. While
                  listening to these hymns, everyone does experience that the
                  vibrations created by every word of a hymn get unknowingly
                  expressed in one’s body form. This is because the above saint
                  belonged to the Dattatraya Cult and had acquired within him
                  the manifestation of the Shabda Brahma. The hymns which took
                  form, through his inspiration were offered by him, at the holy
                  feet of Shri Guru Dattatraya and have therefore become
                  immortal. Naturally therefore each word of those hymns is
                  itself Parabrahma. When these hymns are sung by devotees, the
                  vibrations of the Shabda Brahma are released without the
                  devotee knowing it. That power then vibrates in the atmosphere
                  around to make the mental state of the singer, one with those
                  vibrations. This illustration shows how a particular Tanmantra
                  can be acquired by the body and soul power of the individual.
                  It is clear that merely visiting holy places because the
                  Samadhi Temples of great Avatars have been erected there,
                  without realizing the Tanmantras that permeate such temples
                  and their surroundings, is not the right approach towards
                  worship. Shri Pant Maharaj was recognized as a model for
                  peace, humanity, and dedication.
                </p>
              </article>
            </div>
          </div>
          <hr className="block-divider" />
          <div className="row">
            <div className="col-md-4">
              <img
                src={require("../src/img/dadas_pic.jpg")}
                alt="SRI DATTATRAY BHASKAR BHAGWAT (KNOWN AS DADA)"
                title="SRI DATTATRAY BHASKAR BHAGWAT (KNOWN AS DADA)"
                className="rounded img-fluid img-50"
              />
            </div>
            <div className="col-md-8">
              <article>
                <h4 className="mb-3 mt-3 mt-md-0 mt-lg-0 mt-xl-0">Revered Dada</h4>
                <p>
                  Shri Dattatreya Bhagwat (Dada) was born on a new moon day
                  (Amavasya), on February 6, 1921; in a small town called
                  Satara, Maharashtra, India. Dada spent his childhood helping
                  his family and completing his education for a job. His
                  spiritual journey began when his father told him to go to the
                  temple of Shri Bhairavanath every evening to “lighten the
                  lamp”. One day, a whistling sound came and Dada got
                  frightened. It was only then when he realized that Shri Shesh
                  had appeared and had been resting beside Shri Bhairavanath
                  himself at the temple! One day, his father had met Shri Teli
                  Maharaj on the street who told him, “Feed me daily”. Only Dada
                  was requested to give the food to Shri Teli Maharaj. Shri Teli
                  Maharaj would keep these lunches and when he opened them, they
                  seemed to be very fresh like they had just been cooked! Soon
                  Dada’s exams were approaching and he asked Teli Maharaj to
                  study instead of doing his spiritual practices. When he failed
                  the exam, it was then that Dada took the spiritual path and
                  sacrificed the rest of his life to bring us this gift of
                  Aumkar Sadhana. Shri Teli Maharaj’s quote: “Do not put the
                  world on fire by taking formal education. On the contrary put
                  out the fire which is already ablaze".
                </p>
              </article>
            </div>
          </div>
          <hr className="block-divider" />
        </div>
      </div>
    </main>
  );
}

export default Establishment;
