import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteMainImage } from '../../actions';
import Loader from '../../components/Loader';

export const RenderMainImage = ({ setCurrentId, setShow, mainImage }) => {
    const dispatch = useDispatch()


    const Edit = (item) => {
        setCurrentId(item._id)
        setShow(true)
    }
    return (
        <div>
            <div>
                {!mainImage ? <Loader /> :
                    mainImage.map((item) =>
                        <div key={item._id}>
                            <h3>Заголовок: {item.header || null}</h3>
                            <h3>Название сайта: {item.name || null}</h3>
                            <h3>Описание: {item.description || null}</h3>
                            <h3>Дополнение: {item.descriptionButton || null}</h3>
                            <h3>Кнопка: {item.buttonText || null}</h3>
                            <h3>Фото: {item.image || "Фотография не загружена"}</h3>
                            <button
                                // onClick={() => dispatch(deletePromotion(promotion._id))}
                                onClick={() => {
                                    const payload = {
                                        mainImageId: item._id,
                                    };
                                    dispatch(deleteMainImage(payload));
                                }}
                            >
                                Удалить
                </button>
                            <button onClick={() => Edit(item)}>Редактировать</button>
                        </div>
                    )
                }

            </div>

        </div >
    )
}
