import HelloWorld from "./HelloWorld";
import Greeting from "./Greeting";
import Profil from "./Profil";
import photoDeProfil from "./téléchargement.jpeg";
import Voiture from "./Voiture";
import ListeCourses from "./ListeCourses";

function App() {
  const utilisateur = { nom: "ayman", photo: photoDeProfil };

  return (
    <div>
      <HelloWorld />
      <Greeting prenom="Ayman" />
      <Greeting prenom="Mohammed" />
      <Profil utilisateur={utilisateur} taille={150} />
      <Voiture marque="Kia" modele="Camry" couleur="blue" />
      <ListeCourses objets={["java", "php", "React"]} />
      <ListeCourses objets={["html", "css", "javascript"]} />
    </div>
  );
}

export default App;
