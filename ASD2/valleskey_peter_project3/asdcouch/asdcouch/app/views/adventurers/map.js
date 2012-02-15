function(doc) {
  if (doc._id.substr(0,4) === "key:") {
	  emit(doc._id, {
		  "name":     doc.name,
		  "age" :     doc.age,
		  "sex":      doc.sex,
		  "group":    doc.group,
		  "date":     doc.date,
		  "guild":    doc.guild,
		  "comments": doc.comments
	  });
  }
};