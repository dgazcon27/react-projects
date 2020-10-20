import Swal from 'sweetalert2';

export const SuccessAlert = title => (
	Swal.fire({
	  icon: 'success',
	  title,
	})
)

export const ErrorAlert = (title, text) => (
	Swal.fire({
	  icon: 'error',
	  title,
	  text,
	})
)