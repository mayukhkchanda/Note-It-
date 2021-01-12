* # **What can Note It! Chrome Extension do ?**
    * Download any selected text from any web page as a Note.txt file.

* ### Additional Features: 
	* With **node js** installed, run the ServerSide.js. This will run a local server in your machine with at localhost(127.0.0.1) port number 3000 . Everytime you save a text this local server instance will recieve the text noted(saved), write the file to localfile notesSaved.text and also to store to **mysql** database. 
	* MySQL should be installed any a local user with user name 'student' and password 'student' having DBA(DataBase Administrator) privilege must be step up. This feature will be deprecate in future updates.
	* To see all the saved notes click on the **Note It!** extension in the browser tab and click on the **your saved notes link**. A new tab would open, titled **AlurNotes**. Click on the **Show Notes!**, if there are any saved notes they will be displayed in order of which they were saved. If you haven't saved any notes then, a message would be show for the same.

* ###  Dependencies for Additional Features  
	* **_The module for these two dependencies have been provided. Any further dependency modules will not be tracked._**
	1. **express** module
	2. **mysql** module

* ## Installing NoteIt! extension in Google Chrome Browser:
	* #####	*PREREQUISITE* Must have all the files in a folder(idealy named 'Note It!')
	 1. Open "Settings" in Chrome browser.
	 2. Click on the "Extensions" to open the extensions tab. Alternatively, in new tab in Chrome browser enter "chrome://extensions/" and hit enter.
	 3. Turn on the "Developer mode" option avaialble in the top right corner of the extensions tab.
	 4. "Load unpacked" option should be avaialble to you now.
	 5. Click on "Load unpacked" option and select the folder which contains all these files(idealy named 'Note It!').
	 6. You're NoteIt! extension is now ready to use.


*	## Using Note It!
	* 1. With the Note It! extension enabled, select a text you want to save.
	* 2. Right click and select "Note It!" option from the context menu.
	* 3. Your selected text would be downloaded in your "Downloads" directory(or to the directory your download path is set to).
	
* ## Important Notes:
	* ### 1. Un-Packed Extension. Must have developer options enable to use it.
	* ### 2. Note It! only works in chrome browser.
	* ### 3. Selected file is downloaded as a text file only.