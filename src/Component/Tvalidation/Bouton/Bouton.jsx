import React, { useRef, useState } from "react";

const Bouton = () => {
  const dialog = useRef();
  const inputFileRef = useRef(null);
  const [imgSrc, setImgSrc] = useState([])
  const [inputUrl, setIputUrl] = useState('')
  const [isvalidUrl, setIsvalidUrl] = useState(true)
  // ouvrir le modal
  const openHandler = () => {
    dialog.current.showModal();
  };
  // Fermer le modal
  const closeHandler = () => {
    dialog.current.close();
  };
  // Modifier la valeur de l'imput
  function InputChange(event) {
    const files = Array.from(event.target.files);
    // créer l'url à partir du fichier selectionner
    // const imgUrl = URL.createObjectURL(file)
    // Mettre à jour l'état pour afficher l'image
    setImgSrc(files)
    console.log('fichier selectionner', files);
  }
  function changeUrl(e) {
    const url = e.target.value;
    setIputUrl(url)
    const validUrl = /^https:\/\/.*$/
    setIsvalidUrl(validUrl.test(url));
  }

  const openLink = () => {
      window.location.href = inputUrl;
  }
  // ajouter une image
  function addImage() {
    inputFileRef.current.click()
  }
  // Supprimer une image
  function deleteImg(uid) {
    alert("deleting")
    const supImg = imgSrc.filter(capt => capt.id !== uid);
    setImgSrc(supImg); 
  }
  return (
    <>
        <dialog ref={dialog} className=" dialogue border-0 shadow-lg rounded-2">
            <div className="d-flex justify-content-between">
                <p>Envoyer mon travail</p>
                <span onClick={closeHandler} className="text-danger" >X</span>
            </div>
            <form>
                <select class="form-select  mb-3">
                    <option selected>Choisir une tâche</option>
                    <option value="1">tâche 1</option>
                    <option value="2">tâche 2</option>
                </select>
            <div class="mb-3">
                <textarea class="form-control" placeholder="Description des livrables" rows="5"></textarea>
            </div>
            <div class="mb-3 py-5">
                <input class="form-control" type="file"
                  ref={inputFileRef}
                  accept="image/*"
                  multiple
                  style={{ display: 'none' }}
                  onChange={InputChange}
                />
                  <div className="list-group">
                    {
                      imgSrc.map((file, index) => 
                    <div className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                      <img src={URL.createObjectURL(file)} alt={`Capture ${index + 1}`} className="img-fluid captures" />
                        <div class="progress w-25 bg-secondary h-1">
                          <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div> 
                        <span onClick={deleteImg}>X</span>
                    </div>)}
                    <div className="list-group-item py-3" >
                      <button class="btn btn-warning rounded-5" onClick={addImage}>Ajouter des images</button>
                    </div>
                  </div>
                
            </div>
            <div class="mb-3 ">
                <input class="form-control" type="url" name="url" placeholder="https://example.com" value={inputUrl}
                onChange={changeUrl} pattern = "https://.*"  required />
                 {!isvalidUrl &&
                  isvalidUrl? <p style={{ color: 'red' }}>URL invalide</p>: <a href="#n" className="m-0" onClick={openLink}>{inputUrl}</a>}
            </div>
            <div class="mb-3">
                <button  class="btn btn-success w-100">Envoyer</button>
            </div>
            </form>
        </dialog>
      <button onClick={openHandler}  className="btn btn-warning">
        Envoyer mon travail
      </button>
    </>
  );
};

export default Bouton;
