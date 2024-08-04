document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('courseForm');

    const fields = [
        { label: 'Register Number', type: 'text', id: 'regNo', name: 'regNo' },
        { label: 'Name', type: 'text', id: 'name', name: 'name' },
        { label: 'Year', type: 'text', id: 'year', name: 'year' },
        { label: 'Email', type: 'email', id: 'email', name: 'email' },
        { label: 'Semester', type: 'text', id: 'semester', name: 'semester' },
        { 
            label: 'Course Type', 
            type: 'select', 
            id: 'courseType', 
            name: 'courseType', 
            options: ['Core', 'PE', 'OE'], 
            onchange: 'validateSubjectCode()' 
        },
        { label: 'Subject Code', type: 'text', id: 'subjectCode', name: 'subjectCode' },
        { label: 'Subject Name', type: 'text', id: 'subjectName', name: 'subjectName' },
        { label: 'Credit', type: 'number', id: 'credit', name: 'credit' },
        { label: 'Phone Number', type: 'tel', id: 'phone', name: 'phone' },
        { 
            label: 'Gender', 
            type: 'select', 
            id: 'gender', 
            name: 'gender', 
            options: ['Male', 'Female', 'Other'] 
        },
        { 
            label: 'Department', 
            type: 'select', 
            id: 'dept', 
            name: 'dept', 
            options: ['CSE', 'ECE', 'EEE', 'Mechanical', 'Civil'] 
        }
    ];

    fields.forEach(field => {
        const label = document.createElement('label');
        label.setAttribute('for', field.id);
        label.textContent = field.label;

        let input;
        if (field.type === 'select') {
            input = document.createElement('select');
            input.setAttribute('id', field.id);
            input.setAttribute('name', field.name);
            if (field.onchange) input.setAttribute('onchange', field.onchange);

            field.options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option.toLowerCase();
                opt.textContent = option;
                input.appendChild(opt);
            });
        } else {
            input = document.createElement('input');
            input.setAttribute('type', field.type);
            input.setAttribute('id', field.id);
            input.setAttribute('name', field.name);
            input.required = true;
        }

        form.appendChild(label);
        form.appendChild(input);
    });

    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.textContent = 'Submit';
    button.addEventListener('click', submitForm);

    form.appendChild(button);
});

function validateSubjectCode() {
    const courseType = document.getElementById('courseType').value;
    const subjectCode = document.getElementById('subjectCode');

    if (courseType === 'oe') {
        subjectCode.pattern = '^[a-zA-Z]{2}\\d+$';
        subjectCode.title = 'OE subject code should start with two letters followed by numbers';
    } else {
        subjectCode.removeAttribute('pattern');
        subjectCode.removeAttribute('title');
    }
}

function submitForm() {
    const form = document.getElementById('courseForm');
    if (form.checkValidity()) {
        const formData = new FormData(form);
        const formProps = Object.fromEntries(formData);

        alert(`Form Submitted!\n${JSON.stringify(formProps, null, 2)}`);
    } else {
        form.reportValidity();
    }
}
