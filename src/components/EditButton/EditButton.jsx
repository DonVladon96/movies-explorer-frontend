import React, { useState } from 'react';

function EditButton() {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing? (
        <input type="text" onBlur={handleSaveClick} />
      ) : (
        <button onClick={handleEditClick}>Редактировать</button>
      )}
    </div>
  );
}

export default EditButton;
