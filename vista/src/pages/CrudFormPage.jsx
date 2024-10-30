import { useForm } from 'react-hook-form';
import { createCar, deleteCar } from '../api/cars.api';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/CrudFormPage.css';

export function CrudFormPage() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = async (data) => {
        await createCar(data);
        navigate("/car");
    };

    return (
        <div className="crud-form-page">
            <form onSubmit={handleSubmit(onSubmit)} className="car-form">
                <div className="car-form-row">
                    <span className="icon">
                        <svg width="24" height="24" viewBox="0 0 47 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47 0V15.68H41.36V5.88H5.64V15.68H0V0H47ZM2.82 41.16V49H10.34V41.16H2.82ZM36.66 41.16V49H44.18V41.16H36.66ZM47 19.6V37.24H0V19.6H47ZM13.16 28.42C13.16 25.7152 11.0544 23.52 8.46 23.52C5.8656 23.52 3.76 25.7152 3.76 28.42C3.76 31.1248 5.8656 33.32 8.46 33.32C11.0544 33.32 13.16 31.1248 13.16 28.42ZM43.24 28.42C43.24 25.7152 41.1344 23.52 38.54 23.52C35.9456 23.52 33.84 25.7152 33.84 28.42C33.84 31.1248 35.9456 33.32 38.54 33.32C41.1344 33.32 43.24 31.1248 43.24 28.42Z" fill="#E280BE" />
                        </svg>
                    </span>
                    <input
                        type="text"
                        placeholder="Marca"
                        {...register("Marca", { required: true })}
                    />
                </div>
                <div className="car-form-row">
                    <span className="icon">
                        <svg width="24" height="24" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 10.78C25.584 10.78 26.88 12.103 26.88 13.72C26.88 15.337 25.584 16.66 24 16.66C22.416 16.66 21.12 15.337 21.12 13.72C21.12 12.103 22.416 10.78 24 10.78ZM29.76 33.565V37.485C37.344 38.122 42.096 39.984 43.728 41.16C41.712 42.63 34.992 45.08 24 45.08C13.008 45.08 6.288 42.63 4.272 41.16C5.904 39.984 10.656 38.122 18.24 37.485V33.565C7.776 34.398 0 37.485 0 41.16C0 45.472 10.752 49 24 49C37.248 49 48 45.472 48 41.16C48 37.485 40.224 34.398 29.76 33.565ZM25.92 27.293V41.16H22.08V27.293C15.552 26.362 10.56 20.629 10.56 13.72C10.56 6.125 16.56 0 24 0C31.44 0 37.44 6.125 37.44 13.72C37.44 20.629 32.448 26.362 25.92 27.293ZM31.68 13.72C31.68 9.408 28.224 5.88 24 5.88C19.776 5.88 16.32 9.408 16.32 13.72C16.32 18.032 19.776 21.56 24 21.56C28.224 21.56 31.68 18.032 31.68 13.72Z" fill="#E280BE" />
                        </svg>
                    </span>
                    <input
                        type="text"
                        placeholder="Sucursal"
                        {...register("Sucursal", { required: true })}
                    />
                </div>
                <div className="car-form-row">
                    <span className="icon">
                        <svg width="24" height="24" viewBox="0 0 47 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.5 5.88C26.627 5.88 29.1855 8.526 29.1855 11.76C29.1855 14.994 26.627 17.64 23.5 17.64C20.373 17.64 17.8145 14.994 17.8145 11.76C17.8145 8.526 20.373 5.88 23.5 5.88ZM23.5 0C17.1986 0 12.129 5.243 12.129 11.76C12.129 18.277 17.1986 23.52 23.5 23.52C29.8014 23.52 34.871 18.277 34.871 11.76C34.871 5.243 29.8014 0 23.5 0ZM23.5 27.44C11.371 27.44 1.42137 36.848 0 49H5.73286C7.10685 40.131 14.5454 33.32 23.5 33.32C32.4546 33.32 39.8931 40.131 41.2671 49H47C45.626 36.848 35.629 27.44 23.5 27.44Z" fill="#E280BE" />
                        </svg>
                    </span>
                    <input
                        type="text"
                        placeholder="Aspirante"
                        {...register("Aspirante", { required: true })}
                    />
                </div>
                <div className="button-container">
                    <button type="submit" className="submit-button">
                        <svg width="20" height="20" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_25_209)">
                                <path d="M30.4 22.8C30.4 31.1942 23.5942 38 15.2 38C6.8058 38 0 31.1942 0 22.8C0 14.4058 6.8058 7.6 15.2 7.6C16.2488 7.6 17.2748 7.7064 18.2666 7.9078L15.5306 10.6438C15.4204 10.64 15.3102 10.64 15.2 10.64C8.4968 10.64 3.04 16.0968 3.04 22.8C3.04 29.5032 8.4968 34.96 15.2 34.96C21.9032 34.96 27.36 29.5032 27.36 22.8C27.36 22.6898 27.36 22.5796 27.3562 22.4694L30.0922 19.7372C30.2936 20.7252 30.4 21.7512 30.4 22.8ZM30.476 0L12.882 17.594L20.406 25.118L38 7.524L30.476 0ZM10.7312 19.7448L9.12 28.88C9.12 29.776 9.16 30.72 9.24 31.56L15.2 29.52L21.16 25.056L12.424 16.288L10.7312 19.7448Z" fill="#01BEDB" />
                            </g>
                            <defs>
                                <clipPath id="clip0_25_209">
                                    <rect width="38" height="38" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <button
                        type="button"
                        className="delete-button"
                        onClick={async () => {
                            const accepted = window.confirm("¿Estás seguro de que deseas eliminar?");
                            if (accepted) {
                                await deleteCar(params.id);
                                navigate("/car");
                            }
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.886 15.4V19.6H9.086V15.4H25.886ZM17.5 4.2C10.1675 4.2 4.2 10.1675 4.2 17.5C4.2 24.8325 10.1675 30.8 17.5 30.8C24.8325 30.8 30.8 24.8325 30.8 17.5C30.8 10.1675 24.8325 4.2 17.5 4.2ZM17.5 0C27.1635 0 35 7.8365 35 17.5C35 27.1635 27.1635 35 17.5 35C7.8365 35 0 27.1635 0 17.5C0 7.8365 7.8365 0 17.5 0Z" fill="#C6007E" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
}
