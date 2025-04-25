import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import {
  addCategoryAPI,
  deleteCategoryAPI,
  getAVideoAPI,
  getCategoryAPI,
  updateCategoryAPI,
} from "../services/allAPI";
import Vediocard from "./Vediocard";

function Category({ dropVideoResponse }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categoryName, setCategoryName] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  // console.log(categoryName);

  const handleAdd = async () => {
    if (categoryName) {
      const result = await addCategoryAPI({ categoryName, allVideos: [] });
      // console.log(result);

      if (result.status >= 200 && result.status < 300) {
        handleClose();
        setCategoryName("");
        getCategories();
      } else {
        console.log(result.message);
      }
    } else {
      alert("Please Fill Field");
    }
  };

  const getCategories = async () => {
    const { data } = await getCategoryAPI();
    setAllCategories(data);
  };
  // console.log(allCategories);

  const removeCategory = async (id) => {
    await deleteCategoryAPI(id);
    getCategories();
  };
  useEffect(() => {
    getCategories();
  }, [dropVideoResponse]);

  const dragOver = (e) => {
    console.log("Video-card Drag Over the category");
    e.preventDefault();
  };

  const videoDrop = async (e, categoryId) => {
    console.log("video Dropped");
    const videoId = e.dataTransfer.getData("videoId");
    console.log("videoId" + videoId + "dropped into" + categoryId);
    const { data } = await getAVideoAPI(videoId);
    // console.log(data);
    const selectedCategory = allCategories.find(
      (item) => item.id == categoryId
    );
    selectedCategory.allVideos.push(data);
    console.log(selectedCategory);
    const res = await updateCategoryAPI(categoryId, selectedCategory);
    getCategories();
  };

  const videoDragStarted = (e, videoId, categoryId) => {
    let dataShare = { videoId, categoryId };
    // console.log(dataShare);
    e.dataTransfer.setData("data", JSON.stringify(dataShare));
  };

  return (
    <div>
      <div className="d-grid">
        <button onClick={handleShow} className="btn btn-info">
          Add Category
        </button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="form-control"
            placeholder="category name"
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>

      {allCategories?.length > 0 ? (
        allCategories.map((category) => (
          <div
            className="rounded p-3 m-3"
            droppable="true"
            onDragOver={(e) => dragOver(e)}
            onDrop={(e) => videoDrop(e, category?.id)}
          >
            <div className="d-flex justify-content-between align-items-center">
              <h4>{category?.categoryName}</h4>
              <button
                className="btn btn-link"
                onClick={() => removeCategory(category?.id)}
              >
                <i className="fa-solid fa-trash text-danger"></i>
              </button>
            </div>
            <Row>
              {category?.allVideos.length > 0 ? (
                category?.allVideos.map((card) => (
                  <Col
                    sm={12}
                    className="mb-2"
                    draggable
                    onDragStart={(e) =>
                      videoDragStarted(e, card.id, category.id)
                    }
                  >
                    <Vediocard video={card} insideCategory={true} />
                  </Col>
                ))
              ) : (
                <p className="text-danger fw-bolder">Null</p>
              )}
            </Row>
          </div>
        ))
      ) : (
        <p className="text-danger fw-bolder">Nothing To Display</p>
      )}
    </div>
  );
}

export default Category;
