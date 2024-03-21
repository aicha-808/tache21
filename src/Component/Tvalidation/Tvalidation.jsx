// import {Navigate} from 'react-router-dom';

const Tvalidation = (props) => {
    const url = props.liensUtiles
    const openLink = () => {

        window.location.href = url;
    }

    return ( 
        <div className="container-fluid p-4">
            <div className="">
            <div className="card">
                <div className=" row g-0" >
                    <div class="col-sm-2 p-3 border-end">
                        <div class="">
                        <h6 className="card-title text-success mb-2">{props.numTache}</h6>
                        <h6 className="card-title mb-3">{props.duree}</h6>
                        <h6 className="card-title text-success mb-2">{props.syllabus}</h6>
                        <p className="card-title mb-2">{props.nomSyllabus}</p>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div className="card-body">
                            <h4 className="card-title">{props.titre}</h4>
                            <p className="card-text m-0">{props.objectif}</p>
                            <p className="card-subtitle m-0">{props.Description}</p>
                            <h4 className="card-text m-0">{props.EtapeValidation}</h4>
                            <ul className="list-unstyled m-0">
                                {props.EtapeValidation1}
                            </ul>
                            <h4 className="card-text m-0">{props.titre2}</h4>
                            <a href="#n" className="m-0" onClick={openLink}>{props.liensUtiles}</a>
                            <h4 className="card-text">{props.titre3}</h4>
                            <div className="">
                                <img src={props.imgPjointe} alt="fichier tâche" />
                            </div>
                            <div className="btn-group mt-2 ms-end">
                                <button className="btn btn-secondary">Commencer</button>
                                <button className="btn btn-warning ms-3">terminer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div> );
}
 
export default Tvalidation;