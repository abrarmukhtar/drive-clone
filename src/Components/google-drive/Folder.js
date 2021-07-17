import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faTruckLoading } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { database } from "../../firebase";

export default function Folder({ folder }) {
  const [show, setShow] = useState(false);

  function deleteFolder(id) {
    database.folders.doc(id).delete();

    // database.folders.where("id","==", id).get().then(
    //   querySnapshot=>{
    //     querySnapshot.docs[0].ref.delete();
    //   }
    // ).catch(error=>{
    //   console.log(error);
    // })
  }

  return (
    <>
      <div
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <Button
          to={{
            //pathname is property of useLocation inwhich current location store
            pathname: `/folder/${folder.id}`,
            state: { folder: folder },
          }}
          variant="outline-dark"
          className="text-trancate w-100"
          as={Link}
        >
          <FontAwesomeIcon icon={faFolder} className="mr-2" />
          {folder.name}
        </Button>
        {show && (
          <Button onClick={() => deleteFolder(folder.id)}> Delete </Button>
        )}
      </div>
    </>
  );
}
