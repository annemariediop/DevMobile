function addElement(){
    let task = document.getElementById('task');
    if(task.value.trim() != ''){
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(task.value));

        $(item).on('swiperight', function(){
            console.log("ici");
            $(this).addClass("done");
        });

        $(item).on('swipeleft', function(){
            $(this).slideUp("slow", function(){
                $(this).remove();
            });
        })
        let taskList = document.getElementById('taskList');
        taskList.appendChild(item);
        task.value='';
        $(taskList).listview('refresh');
    }

}
 
