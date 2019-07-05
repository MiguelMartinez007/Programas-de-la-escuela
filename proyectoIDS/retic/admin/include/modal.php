<!-- add modal for subject -->
<div class="modal fade" id="addsubject" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
        <div class="modal-header">
            <h3>Agregar Materia</h3>
        </div>
        <div class="modal-body">
            <form action="data/data_model.php?q=addsubject" method="post">
                <div class="form-group">
                    <input type="text" class="form-control" name="code" placeholder="Clave Oficial" />
                </div>
				  <div class="form-group">
                    <input type="text" class="form-control" name="code" placeholder="Clave Interna" />
                </div>
				  <div class="form-group">
                    <input type="text" class="form-control" name="code" placeholder="Hrs. T-P-C" />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" name="title" placeholder="Nombre de la Materia" />
                </div>
				<div class="form-group">
                    <input type="text" class="form-control" name="title" placeholder="Semestre" />
                </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
            <button type="submit" class="btn btn-primary"><i class="fa fa-plus"></i> Agregar</button>
            </form>
        </div>
    </div>
  </div>
</div>

<!-- add modal for class info -->
<div class="modal fade" id="addclass" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
        <div class="modal-header">
            <h3>Add Class Info</h3>
        </div>
        <div class="modal-body">
            <form action="data/class_model.php?q=addclass" method="post">
                <div class="form-group">  
                    <select name="subject" class="form-control" required>
                        <option value="">Select Subject...</option>
                    <?php 
                        $r = mysql_query("select * from subject");
                        while($row = mysql_fetch_array($r)):
                    ?>
                        <option value="<?php echo $row['code']; ?>"><?php echo $row['code']; ?> - (<?php echo $row['title']; ?>)</option>
                    <?php endwhile; ?>
                    </select>
                </div>
                <div class="form-group">
                    <select name="course" class="form-control" required>
                        <option value="">Select Course...</option>
                        <option>BSIT</option>
                        <option>BSCRIM</option>
                        <option>BSAT</option>
                    </select>
                </div>
                <div class="form-group">
                    <select name="year" class="form-control" required>
                        <option value="">Select Year...</option>
                        <option>I</option>
                        <option>II</option>
                        <option>III</option>
                        <option>IV</option>
                    </select>
                </div>
                <div class="form-group">
                    <select name="section" class="form-control" required>
                        <option value="">Select Section...</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                    </select>
                </div>
                <div class="form-group">
                    <select name="sem" class="form-control" required>
                        <option value="">Select Semester...</option>
                        <option>1st</option>
                        <option>2nd</option>
                    </select>
                </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
            <button type="submit" class="btn btn-primary"><i class="fa fa-plus"></i> Agregar</button>
            </form>
        </div>
    </div>
  </div>
</div>

<!-- add modal for student -->
<div class="modal fade" id="addstudent" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
        <div class="modal-header">
            <h3><i class="fa fa-user"></i> Agregar Alumno</h3>
        </div>
        <div class="modal-body">
            <form action="data/student_model.php?q=addstudent" method="post">
                <div class="form-group">
                    <input type="text" class="form-control" name="studid" placeholder="No. Control" />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" name="fname" placeholder="Nombre" />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" name="lname" placeholder="Apellido" />
                </div>
				 <div class="form-group">
                    <input type="text" class="form-control" name="lname" placeholder="Facebook" />
                </div>
				 <div class="form-group">
                    <input type="text" class="form-control" name="lname" placeholder="Correo" />
                </div>
				 <div class="form-group">
                    <input type="text" class="form-control" name="lname" placeholder="Télefono" />
                </div>
				 <div class="form-group">
                    <input type="text" class="form-control" name="lname" placeholder="Semestre" />
                </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
            <button type="submit" class="btn btn-primary"><i class="fa fa-plus"></i> Agregar</button>
            </form>
        </div>
    </div>
  </div>
</div>

<!-- add modal for student -->
<div class="modal fade" id="addteacher" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
        <div class="modal-header">
            <h3><i class="fa fa-user"></i> Agregar Profesor</h3>
        </div>
        <div class="modal-body">
            <form action="data/teacher_model.php?q=addteacher" method="post">
                <div class="form-group">
                    <input type="text" class="form-control" name="teachid" placeholder="No. Profesor" />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" name="fname" placeholder="Nombre" />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" name="lname" placeholder="Apellido" />
                </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
            <button type="submit" class="btn btn-primary"><i class="fa fa-plus"></i> Agregar</button>
            </form>
        </div>
    </div>
  </div>
</div>