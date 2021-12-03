import React, {useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {getPhotos, getPhotosById, getPosts, postPhoto, postPost} from "../Queries";

const AddPost = (props) => {
    const history = useHistory();

    const createNew = async ({title, content, author, imageInput, imageFromBank, createdAt}) => {
        let tagsArr = [];

        const images = await getPhotosById(imageFromBank);

        if(imageInput !== ""){
            await postPhoto(imageInput);
        }

        let imagRs;
        if(imageInput !== ""){
            imagRs=imageInput;
        }else if(images.length  === 0){
            imagRs="https://images.unsplash.com/photo-1613092869277-6e02af5564aa?auto=format&fit=crop&w=1500&q=80";
        }else {
            imagRs=images[0].url;
        }
        await postPost(title,content,author,tagsArr,imagRs,createdAt);

        let m = await getPosts();
        props.onAddPost();
        history.push(`/posts`);
    };

    const [imgs, setImgs] = useState([]);
    const [image, setImage] = useState('');
    const [imageview, setImageview] = useState([]);

    const fetchData = async () => {
        const imgJson = await getPhotosById(image);
       setImageview(imgJson);
       const imgs = await getPhotos();
          if(!imgs.length){
              return;
          }
         setImgs(imgs);
    };

    useEffect(() => {
       fetchData();
    }, [image]);


    return (
        <div className="container">
            <div className="header">
                <div className="logo">
                    <span className="second-word"> PostsApp - Admin Page</span>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10" >
                    <br/>
                    <br/>
                    <h1 className="text-center"> Add new post here:</h1>
                    <form onSubmit={async (e) => {
                        e.persist();
                        e.preventDefault();
                        const {target: {elements: {title, content, imageUrl, author}}} = e;
                        await createNew({
                            title: title.value,
                            content: content.value,
                            author:author.value,
                           imageInput: imageUrl.value,
                           imageFromBank:image,
                            createdAt: Date.now(),
                        });
                    }}>
                        <div className="form-group">
                            <input type="text" name="title" placeholder="title" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="author" placeholder="author" className="form-control"/>
                        </div>
                        <div className="form-group">
                        <textarea type="text" name="content" placeholder="content" className="form-control"/>
                        </div>
                        <h4>Enter here your own url for displaying the image:</h4>
                        <div className="form-group" style={{width:900+"px",display: "inline-block", marginRight:32 +"px"}}>
                        <input name="imageUrl" placeholder="imageUrl" className="form-control"/>
                        </div>

                        <br/>
                        <h4>Otherwise, you can choose one of these images. Just pick and watch:</h4>
                        <div style={{marginLeft:20+"px"}}>
                        <select style={{marginBottom:20+"px"}} name="url" id="url" onChange={e => setImage(e.target.value)}>
                            {(imgs || []).map(img => (
                                <option value={img._id} key={img._id}>
                                    {img.url}
                                </option>
                            ))}
                        </select>
<br/>
                        {(imageview || []).map(im => (
                            <img width={185+"px"} src={im.url} style={{paddingRight:10+"px", paddingBottom:10+"px"}}/>

                        ))}
                        </div>
                        <div className="text-center">
                        <input type="submit" value="submit" className="btn btn-lg btn-primary" style={{marginRight: 20+"px"}}/>
                        <Link className="btn btn-danger btn-lg" to="/" >Back</Link>
                        </div>
                    </form>

                </div>
                <div className="col-sm-1"></div>
            </div>

        </div>
    )
};


export default AddPost;