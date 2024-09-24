const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost/api/projects", true);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            const data = JSON.parse(xhr.responseText);        

       
            let projectsHtml = `
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Project Name</th>
                            <th>Description</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

          
            data.forEach(project => {
                projectsHtml += `
                    <tr>
                        <td>${project.id}</td>
                        <td>${project.name}</td>
                        <td>${project.description}</td>
                        <td><button class="btn" onclick="goToTasks(${project.id})">Detail</button></td>
                    </tr>
                `;
            });

            projectsHtml += `
                    </tbody>
                </table>
            `;

           
            document.getElementById("projects").innerHTML = projectsHtml;
        } else {
            console.error("Hata:", xhr.statusText);
            document.getElementById("projects").innerHTML = "Veri yüklenirken hata oluştu.";
        }
    };
    xhr.send();

    function goToTasks(projectId) {
       
        window.location.href = `http://localhost/tasks.html?id=${projectId}`;       
    }