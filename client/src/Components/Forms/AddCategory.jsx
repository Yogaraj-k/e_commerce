import "../../css/addcategory.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

function AddCategory() {
	return (
		<div className='add-category-form'>
			<div className='cateory form head'>
				<h1>Create New Category</h1>
			</div>

			<div className='add-image' style={{ display: "flex" }}>
				<div className='description'>
					<h3>Image</h3>
					<p>Upload your category image here</p>
				</div>
				<div className='input-container'>
					<label htmlFor='category-image'>
						<span style={{ color: "#575757" }}>
							<FontAwesomeIcon icon={faCloudArrowUp} />
							<br />
							<p>
								<span style={{ color: "#009f7f" }}>
									Upload Image
								</span>
								<br />
								<br />
								or drag and drop PNG, JPG
							</p>
						</span>
					</label>
					<input
						type='file'
						id='category-image'
						style={{ display: "none" }}
					/>
				</div>
			</div>
		</div>
	);
}

export default AddCategory;
